- que-1 const str = 'Hey JS! You R AMAZING'; please count the vowles in the string in js.
- ans-1: 
        const str =  'Hey JS! You R AMAZING';
        const vowels = ['a', 'e', 'i', 'o', 'u];

        step1:- to trasnform string into lowercase using toLowerCase method
        step2:- to split into array using split method
        step3:- to iterate the loop over the string array uisng forEach array method.
        step4:- to check given character is vowels to increse count other wise skip using includes method

        const count = 0;
        str.toLowerCase().split('').forEach((ch)=>{
            if(vowels.includes(ch)) {
                count++;
            }
        })
        console.log(count)


- que-2 const str = "hello adil this site plese introduce yourself"; please count the  character how many times it is repeat;

- ans-2: 
    step1: string is the character of array to iterate uisng the for of loop.
    step2: if found any value add otherwise initiallly set 1;
    
    const obj = {};
    for(let x of str) {
        if(obj[x]){
            obj[x]++;
        }else{
            obj[x] = 1;
        }
    }

-