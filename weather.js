const search = document.querySelector('.search');
const city = document.querySelector('.city');
const icon =document.querySelector('.icon'); 
const temp = document.querySelector('.temp');
const er = document.querySelector('.error');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const key = `65748b989f02ec2d31178557c552f849`
=======
>>>>>>> bddca8cec665f34fa6b20043ef0b997a8c6530a8
=======
>>>>>>> bddca8cec665f34fa6b20043ef0b997a8c6530a8
=======
>>>>>>> bddca8cec665f34fa6b20043ef0b997a8c6530a8
=======
>>>>>>> bddca8cec665f34fa6b20043ef0b997a8c6530a8

search.addEventListener('submit',(e)=>{
    e.preventDefault();
    const val = document.querySelector('#search').value;
    if(val==null || val==''){
      //pass;
    }else{
        console.log(val);
    }
    document.querySelector('#search').value='';
    weather(val)
})
async function weather(loc){
    try{
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`)
        const res = await resp.json();       
        city.innerHTML = loc;
        const src =`https://openweathermap.org/img/w/${res.weather[0].icon}.png`;
        icon.innerHTML=`${res.weather[0].main}<img src='${src}' style="width: 70px; height: 70px;"></img>`;
        const tem =res.main.temp-273.15;
        temp.innerHTML = `${Math.trunc(tem)}°C`;

    }catch(err){
        console.log(err);
        city.innerHTML = '';
        er.innerHTML='<strong>NO PLACE OF THIS NAME EXISTS</strong>'
        icon.innerHTML='';
        temp.innerHTML='';
        setTimeout(()=>{er.innerHTML=''},1900);
    }
    
}
