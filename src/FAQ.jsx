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
            q: "Расскажите подробнее как ставится лицензия?",
            a: "Сразу скажу, лицензия через сервер. Ей по сути даже аккаунт не понадобится, лицензия встает на устройство."
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
            q: "Что мне нужно делать на устройстве?",
            a: "Нужно будет скачать и установить папку на устройство. Указываем путь до папки из интерфейса программы. Вставляем код активации и получаем лицензию"
        },
        {
            q: "Не слетит лицензия?",
            a: "Нет, все работает надежно, ничего не слетает"
        },
        {
            q: "Могу ли я установить данный способ на рабочем железе?",
            a: "Ни я ни кто либо другой не посоветует, а может и даже не позволит вам это сделать. Поэтому данный способ подойдет только на ваше личное устройство"
        },
        {
            q: "Будет-ли работать обновление?",
            a: "Из интерфейса - нет. Нужно будет скачать новую версию программы. Лицензия автоматом подтягивается."
        },
        {
            q: "Если меня не устроит данное решение, как я могу вернуть деньги?",
            a: "Да без пробем верну, если не подошло то уж значит так)"
        },
    ]

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <Header />
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    СОБИРАЮ ТУТ ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ И ОТВЕТЫ НА НИХ. Буду дополнять!
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