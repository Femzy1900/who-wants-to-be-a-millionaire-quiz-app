import { useEffect, useState } from "react"
import useSound from "use-sound";


function Trivial({data, setTimeOut, setQuestionNumber, questionNumber}) {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("answer");


    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber])

    const handleClick = (a) => {
        setSelectedAnswer(a)
        setClassName("answer active");
        delay(1000, () => {
               setClassName(a.correct ? "answer correct" : "answer wrong");
            }
        );

        delay(3000, () => {
            if(a.correct) {
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null)

            } else {
                setTimeOut(true)
            }
        })

    
    }
    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    }
  return (
    <div className='trivia'>
        <div className="questions">
            {question?.question}
        </div>
        <div className="answers">
            {question?.answers.map((a) => (
                <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>
                    {a.text}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Trivial  
