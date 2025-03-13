let xhr = new XMLHttpRequest
xhr.open('get', 'url', true)
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        if (xhr.status == 200) {
            let obj = JSON.parse(xhr.responseText)
        }
    }
}
xhr.send()