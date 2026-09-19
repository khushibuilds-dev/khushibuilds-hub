const fortune = [
    "Apke sitaro se pata chala hai ki jaldi hi apki kismat chamakne wali hai 👍👍",
    "Are aap kyu itna paresan har waqt rahete  ho thoda intezaar karu apki kismat ke panno mai bhut kuch chhupa hua hai 😍😍.",
    "Appke sitaro se pata chala hai ki tum bhut hoshiyaar banne ki koshish karte hai jo tum ho nahi.",
    "Sitaro ki duniya se pata chala hai ki tum mai dimag ki kami hai chalo loi baat nahi dimag ki kami hai to kya hua gadho ke pass vaise bhi dimag kaha hi rahta hai🫢🫢.",
    "Apka samaye thoda kathin chal raha hai to lekin paresan mt ho bhut jald hi tum jo chahate ho vo tumko milega 🥰🥰.",
    "Are tum vahi ho na jo firz se mithai chura kar khate ho chalo tumse bhi aaj baat ho gyi churulaal ji🥸🥸🥸.",
    "Are aap to ane wale samay ke raja hai congratulation in advance.😊😊😊",
    "Oooo nooo ye pata chala hai apke bare mai kya aap filmo ki duniya pasand hai nahi to jao kamyabi apka intazaar kar rhi hai best of luck😀😀.",
    "Are vah ab kyu paresan hoti hai ab to parsani gyi tum sahi rah per ho bas mehenat karte raho☺️☺️☺️.",
    "Tumse milkar achha laga ki kitni chhoti umer se hi tum bhut kuch shikh gaye ho ab tum jald hi kamyabi tumhare kadam chumegi 😀😀😀.",
    "Are appke sitaro se pata chala ki kyu apke jo chahate ho vo nahi mil raha hai tum na gram pani se nahaya karu thik or sabun bhi lagaya karu kallu das🤭🤭🤭.",
    "Mubarak ho bhut jald hi tumhare ruke hua kaam pure honge bas thoda sabr rakho",
    "Are ghade tum kabhi nahi sodharoge 👺👺na phir tum subah der se so kar uthe ho na jaldi utha karu abhi tumko bhut mehenat karni hai.",
    "Apke sitaro se pata chala hai ki tum jb dheko apne kabiliyat per sak rahta hai ki kya hoga nahi hoga are sb hoga kdam to age badhao.",
    "Duniya mai beta bina mehenat ke kuch nahi milta hai thoda to mehenat to krni padegi na tum bas thoda koshish karne baad haar man jate ho😡😡 tabhi aaj kaamyaab nahi ho chalo ayi survat karte hai.",
    "Are tum to bilkul lallulaal😂😂😂 ho thoda personality ko change karu achhi chhez hi positive engery deti hai thoda shudaro khud ko thik.",
    "Jaise kutte ki dul kabhi shidi nahi ho skti hai vaise tum kabhi sudar nahi sakte ho na  😡😡😡 roj kyu glti karte ho aaj tumhne daant padegi kisi se bhi jarur kah lena thik galti tumhari hi hai.",
    "Hiii chandulaal inta hosiyaar kyu bante ho 🤭🤭 . Lekin ek baat or tum bhut cute ho ",
    "Apki muskaan bhut achhi hai. 😘😘"
]


function fortuneTeller(){

    const userName = document.getElementById("username").value;
    const randomIndex = Math.floor(Math.random()*fortune.length);
    const userFortune = fortune[randomIndex];
    const fortuneMessage = document.getElementById("fortune-message");

    let fortuneDetail = (userName === "") 
        ? `Please Enter your name first` 
        : `Hii ${userName} \n\nUniverse ne apke sitare padhe or pata hai kya batya hai apke bagye ne khud padh lo \n\n"${userFortune}"`;
    
    fortuneMessage.innerText = fortuneDetail 
}


