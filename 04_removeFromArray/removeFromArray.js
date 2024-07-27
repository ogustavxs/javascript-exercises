const removeFromArray = function(item, ...word) {
    return item.filter((item) => {
        return !word.includes(item)
    })
};

// Do not edit below this line
module.exports = removeFromArray;
