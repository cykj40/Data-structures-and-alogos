function canConstruct(ransomNote: string, magazine: string): boolean {
    const charCount = new Array(26).fill(0);

    for (const ch of magazine) {
        charCount[ch.charCodeAt(0) - 97]++;
    }

    for (const ch of ransomNote) {
        const index = ch.charCodeAt(0) - 97;
        if (charCount[index] === 0) {
            return false;
        }
        charCount[index]--;
    }
    return true;
}

// test cases
console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true