var decodeBitsAdvanced = function(bits){
    bits = bits.replace(/(^0+|0+$)/g, "");
    if(!bits) return bits;
    if(!bits.replace(/1+/g, "")) return '.';
    
    let length = bits.match(/0+|1+/g).map(s=>s.length).sort((x, y)=> x-y);
    let [min, max] = [length.shift(), length.pop()];
    let unit = (max / 7 + min) / 2;
    let seven = Math.floor(7 * unit);
    let three = Math.round(3 * unit);
    
    return bits
            .replace(new RegExp("0".repeat(seven) + "+", "g"), "   ")
            .replace(new RegExp("1".repeat(three) + "+", "g"), "-")
            .replace(new RegExp("0".repeat(three) + "+", "g"), " ")
            .replace(/1+/g, ".")
            .replace(/0+/g, "")
}

var decodeMorse = function(morseCode){
   let words = morseCode.split("   ")
              .map(word => word.split(" ")
              .map(letter => MORSE_CODE[letter]))
              .map(letters => letters.join(""))
              .join(" ")
    return words;
}