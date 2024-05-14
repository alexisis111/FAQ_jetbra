import { useRef, useState, useEffect } from "react"
import {useTelegram} from "../hooks/useTelegram.js";
import Header from "./Header.jsx";


const FaqsCard = (props) => {
    const { tg } = useTelegram();
    useEffect(() => {
        tg.ready();
    }, []);
    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props


    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "Что за лицензия?Сколько будет работать?",
            a: "лицензия через сервер активации. Будет работать до 2026 года."
        },
        {
            q: "Это студенческая лицензия?",
            a: "Нет, это не студенческая лицензия."
        },
        {
            q: "Лицензия на мой аккаунт?",
            a: "Нет. Вообще аккаунт не нужен. Ваш аккаунт может быть введен. Все будет работать."
        },
        {
            q: "Не обман?",
            a: "Нет) Смысла обманывать просто нет))."
        },
        {
            q: "Не слетит лицензия?",
            a: "Нет, все работает надежно, ничего не слетает"
        },
        {
            q: "Какие гарантии?",
            a: "Я человек честный, и никого не обманываю, знаю что слова это слова, но на деле вы убедитесь сами. Рейтинг на авито - реальный."
        },
    ]

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <Header />
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    ТУТ ВСЕ ОТВЕТЫ - НА ВСЕ ВОПРОСЫ
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Если тут нет вашего вопроса. Просто напишите свой вопрос в чат боту.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}