import interviewImage from "../assets/interviewImage1.jpg"
import newsImage1 from "../assets/newsImage1.jpg"
import newsImage2 from "../assets/newsImage2.jpg"
import newsImage3 from "../assets/newsImage3.jpg"
import { IDataItem } from "../types/data"

const description = "Директор санкт-петербургской типографии «Четыре цвета» Анри Мелуа — про автоматизацию полиграфии, неактивные продажи, куда потратить сто миллионов и перспективы полиграфии."

const text = `Эффективность типографии должна быть выше, чем эффективность маркетплейса или службы доставки, иначе возникнет ситуация — «рыночек порешал» (уже решает), и дефицит сотрудников будет становиться катастрофичным. Из этого можно делать много выводов, один из них — надо что-то менять.

Перестановкой кроватей заниматься нерационально, поэтому поиски потенциала роста конкурентоспособности производства будут проходить в сферах автоматизации всего и вся, повышения личной эффективности каждого сотрудника, сокращения зависимости от низкоквалифицированных кадров, механизации вспомогательных операций — всё то, о чем и так постоянно говорят.
Но вот добавляются для полиграфических и смежных производств новые точки, пусть и не роста, но хотя бы надежды: искусственный интеллект и роботизация. Сейчас, кажется, об этом рано говорить, но, как и со всеми новациями последних лет, период между оценками «какие глупости» и «это всем очевидно» становится всё короче, и если не начать хотя бы думать об этом сейчас, об этом подумает кто-то другой. И как показывает практика, конкуренция будет опять не между полиграфическими предприятиями, а между отраслями, когда, по известной аналогии, конкурент одного бренда мороженого — вовсе не другой бренд мороженого, а пиво.

Поэтому полиграфистам надо смотреть по сторонам, в смежные и не очень отрасли: а что там происходит? И самые интересные и жизнеспособные идеи будут возникать на стыке областей знаний и отраслей, и чем неожиданней будет коллаборация, тем больше шансов у неё закрепиться на рынке. Всё это и нужно иметь в виду, выбирая себе стратегию развития. И, как видно, в некоторых типографиях угадали со специализацией: конечно, это книги и коробки, в широком смысле — упаковка и этикетка. Сейчас именно туда инвестируются значительные суммы и именно здесь происходит невиданный рывок в автоматизации и построении систем, работающих «в линию», с минимальным задействованием человека. Там и нужно ждать нового роста.

Мы в Publish тоже находимся в поисках точек роста. И тоже испытываем давление рынка труда, поэтому прямо сейчас мы выступаем заказчиком нескольких проектов, связанных с использованием искусственного интеллекта в редакционной деятельности, — это должно снять часть нагрузки с сотрудников редакции уже в ближайшем будущем, чтобы они могли более эффективно делать «человечью» работу — изобретать и придумывать. А это то, что мы делаем лучше всех, без всяких компьютерных нейросетей.

Одна из последних наших идей — это «Цвет месяца Publish», который будет каждый номер журнала делать ярче и интереснее, а полиграфию — обогащать новыми смыслами. И помогать нам в этом будет наш технологический партнёр, компания, которая знает толк в цвете,— «ОктоПринт Сервис».
`

const extraText = "Мы уже вовсю работаем над цветом января и скоро объявим его, чтобы вы смогли присоединиться к этому красивому и свежему проекту. А возможностей будет предостаточно. Подписывайтесь на нас в соцсетях и следите за подробностями. Да пребудет с полиграфией сила!"

const author = "Дмитрий Старцев"

interface IData {
    interviews: IDataItem[];
    news: IDataItem[];
}

const data: IData = {
    interviews: [
        {
            id: 1,
            type: "ИНТЕРВЬЮ",
            date: "21 апреля 2022 г.",
            title: "«Журналус» от Студии Артемия Лебедева в гостях у Publish (часть 11)",
            description,
            text,
            extraText,
            author,
            imageUrl: interviewImage,
        },
    ],
    news: [
        {
            id: 1,
            type: "ПЕЧАТЬ",
            date: "21 апреля 2022 г.",
            title: "Как дела у книжных типографий",
            description,
            text,
            extraText,
            author,
            imageUrl: newsImage1,
        },
        {
            id: 2,
            type: "ПЕЧАТЬ",
            date: "21 апреля 2022 г.",
            title: "Что нас ждет?",
            description,
            text,
            extraText,
            author,
            imageUrl: newsImage2,
        },
        {
            id: 3,
            type: "ПЕЧАТЬ",
            date: "21 апреля 2022 г.",
            title: "Цифры в «цифре»",
            description,
            text,
            extraText,
            author,
            imageUrl: newsImage3,
        }
    ]
}

const getAllNews = () => {
    // await new Promise((res) => setTimeout(res, 1000))
    const { news } = data
    return [news[2], news[1], news[2], news[2]]
}

const getNewsById = (id: number) => {
    const { news } = data
    const newsItem = news.find(item => item.id === id)
    return newsItem
}

export {
    getAllNews,
    getNewsById
}

export default data