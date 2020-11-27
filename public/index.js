function debounce(func,delay){
    let timeout; 
    return function(...args){
        clearInterval(timeout);
        timeout = setTimeout(func(...args),delay);
    }
}
