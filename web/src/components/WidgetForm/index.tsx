import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImag from "../../assets/bug.svg"
import ideaImag from "../../assets/idea.svg"
import otherImag from "../../assets/thought.svg"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problem',
    image: {
      source: bugImag,
      alt: 'Bug image'
    },
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImag,
      alt: 'Lamp image'
    },
  },
  OTHER: {
    title: 'Other',
    image: {
      source: otherImag,
      alt: 'Cloud image'
    },
  }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackRestartRequested={handleRestartFeedback}
              feedbackType={feedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )
      }

      <footer className="text-xs text-neutral-400">
        Created with ♥ by RenanMDO
      </footer>
    </div >
  )
}