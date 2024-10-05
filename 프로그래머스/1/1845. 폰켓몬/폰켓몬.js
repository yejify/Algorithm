function solution(nums) {    
    //중복 없는 폰켓몬 수
    const unique = new Set(nums)
    
    //가져갈 수 있는 폰켓몬 수
    const maxSelect = nums.length / 2
    
    return Math.min(unique.size, maxSelect);;
}