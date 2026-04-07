const myName = 'Артем'
const mySurname = 'Тихоненко'
const myJob = 'Front-end разработчиком'

const info = `${myName} ${mySurname} и я являюсь ${myJob}`

const myInfo = function(info) {
    return 'Привет, я ' + info
}

console.log(myInfo(info))