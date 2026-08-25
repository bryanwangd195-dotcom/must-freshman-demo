import Image from "next/image";
import { Send, X } from "lucide-react";
import { assetPath, MEDIA_ASSETS } from "@/config/mediaAssets";
import { SITE_CONTENT } from "@/config/siteContent";

interface AssistantProps {
  open: boolean;
  question: string;
  answer: string;
  onOpen: () => void;
  onClose: () => void;
  onQuestionChange: (value: string) => void;
  onAsk: (question: string) => void;
}

/**
 * AI 新生小幫手介面
 *
 * 維護索引：
 * - 固定文案與快捷問題：src/config/siteContent.ts → assistant
 * - 按鈕圖片：src/config/mediaAssets.ts → assistant
 * - Prototype 只做本機關鍵字比對；正式 AI 應改接校內 API／RAG。
 * - 正式服務不可把密碼、身分證號或學籍個資傳送給未核准的第三方服務。
 */
export function Assistant(props: AssistantProps) {
  const content = SITE_CONTENT.assistant;
  return (
    <>
      <button className="aiButton" onClick={props.onOpen} aria-label="開啟 AI 新生小幫手">
        <Image src={assetPath(MEDIA_ASSETS.assistant.path)} alt="" width={62} height={68} />
        <span>{content.buttonPrompt}<b>{content.buttonAction}</b></span>
      </button>

      {props.open && (
        <aside className="chat" aria-label="AI 新生小幫手">
          <header>
            <div><span>AI</span><div><b>{content.title}</b><small>新生共通資訊 Prototype</small></div></div>
            <button onClick={props.onClose} aria-label="關閉"><X /></button>
          </header>
          <div className="messages">
            <div className="bot">{content.welcome}</div>
            <div className="bot answer">{props.answer}</div>
            <div className="prompts">
              {content.prompts.map((prompt) => <button onClick={() => props.onAsk(prompt)} key={prompt}>{prompt}</button>)}
            </div>
          </div>
          <form onSubmit={(event) => { event.preventDefault(); if (props.question.trim()) props.onAsk(props.question); }}>
            <input value={props.question} onChange={(event) => props.onQuestionChange(event.target.value)} placeholder={content.inputPlaceholder} aria-label="輸入問題" />
            <button aria-label="送出"><Send /></button>
          </form>
          <small className="privacy">{content.privacy}</small>
        </aside>
      )}
    </>
  );
}
