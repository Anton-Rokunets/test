const urls = [
    'https://whatcms.org/API/Tech?key=6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8&url=alfasatcom.ru',
    'https://whatcms.org/API/Tech?key=6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8&url=alfasatcom.ru',
    'https://whatcms.org/API/Tech?key=6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8&url=alfasatcom.ru',
    'https://whatcms.org/API/Tech?key=6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8&url=alfasatcom.ru',
    'https://whatcms.org/API/Tech?key=6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8&url=alfasatcom.ru',
    'https://whatcms.org/API/Tech?key=6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8&url=alfasatcom.ru',
    'https://whatcms.org/API/Tech?key=6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8&url=alfasatcom.ru',
    'https://whatcms.org/API/Tech?key=6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8&url=alfasatcom.ru',
    'https://whatcms.org/API/Tech?key=6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8&url=sdfdsxcvxcfds',
    'https://whatcms.org/API/Tech?key=6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8&url=sdfxcvcxsfds',
    'https://whatcms.org/API/Tech?key=6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8&url=adxcvvasd',
];

const makeRequest = async (url) => {
    const response  = await fetch(url);
    return  await response.json();
}
const makeRequests = async (urls) =>{
    return Promise.allSettled(urls.map(url => makeRequest(url)))
}

makeRequests(urls).then(data => console.log(data.map(item => JSON.stringify(item.value)))).then(() => console.log('Выполнение завершено!'))
