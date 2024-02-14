/**
  * Функция возвращает фрагмент алфавита
 * @param {number} from - параметр отвечающий за начало поиска
 * @param {number} to - параметр отвечающий за конец поиска
 * @param {Array} exclude - массив исключений - буквы, содержащиеся в нем, не будут включены в результирующую строку
 * @returns {String} - возвращается строка состоящая из элементов полученного массива разделенного пробелом
 **/
const alphabetSlice = (from=0, to = 25, exclude=['c', 'd']) => {
    const content = []
    for(let i = from; i <= to; i++){
        const  char = String.fromCharCode(97 + i)
        if(!exclude.includes(char)) {
            content.push(char)
        }
    }
    return content.join(' ')
}

console.log(alphabetSlice())
