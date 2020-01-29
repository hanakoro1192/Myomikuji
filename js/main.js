'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', ()=>{
        // 確率操作の方法；大吉を出やすくする
        // const results = ['大吉','大吉','大吉','大吉','凶'];

        const results = ['大吉','中吉','凶','末吉'];

        const n = Math.floor(Math.random() * results.length);
         
        btn.textContent = results[n];

        // nを用いない方法
        // btn.textContent = results[Math.floor(Math.random() * results.length)];

        
        // 確率操作の方法
        // const n = Math.random();
        // if(n < 0.05){
        //     btn.textContent = '大吉';　5%の確率で大吉
        // }else if(n < 0.2){
        //     btn.textContent = '中吉';　15%の確率で中吉
        // }else {
        //     btn.textContent = '凶'; 80%の確率で凶
        // }


        
        // switchを用いた書き方
        // switch(n) {
        //     case 0:
        //     btn.textContent = '大吉';
        //     break;
        //     case 1:
        //     btn.textContent = '中吉';
        //     break;
        //     case 2:
        //     btn.textContent = '凶';
        //     break;
        // }
    });
}

