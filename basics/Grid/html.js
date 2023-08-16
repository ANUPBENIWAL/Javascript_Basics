function geeks() {

    // for (let index = 0; index < 4; index++) {
       
        let a = document.getElementById("grid");
        let b = document.createElement("ul");
        let value = document.getElementsByTagName('ul');
        a.appendChild(b);
        let c = document.createElement("img", );
        let c1 = document.createElement('li');
        let d= b.appendChild(c);
        let d1 = b.appendChild(c1);
        // d.textContent = 'ram';
        // let img = new Image();
        // img.src ='https://rukminim2.flixcart.com/image/612/612/xif0q/cpu/s/z/g/3-7-ryzen-5-cpu-2-assembled-original-imagqwpyfn4dhxxj.jpeg?q=70';
        // let first = document.getElementsByClassName("first_div");
        // d.appendChild(img);
        // const Div =()=>{
        //     return
        //      <div>
        //        <Button name="Save" ></Button>
        //        <Button name="Edit"></Button>
        //        <Button name="Cancel"></Button>  
        //      </div>}
        // // first.innerHTML += `<div>
        // <Button name="Save" ></Button>
        // <Button name="Edit"></Button>
        // <Button name="Cancel"></Button>
        // </div>`;
        // d1.textContent = 'ram2';
        // b.innerHTML +='<p>hi</p>';
        a.innerHTML += `<ul id="uls" class="list" >
        <li><img class="imgs" src="data:image/jpeg;base64,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" alt="images"></li>
        <li>Monitor in Dell</li>
        <li>Price:-10000</li>
        
        <li>DELL S Series 27 inch <br>Full HD IPS Panel <br>with Brightness : 300 nits,<br> Color Gamut, 99% sRGB, <br>5 Years Warranty, Ultra Slim <br>Bezel Monitor (S2721HNM / S2721HN) <br> (AMD Free Sync, <br>Response Time: 4 ms, 75 Hz Refresh Rate</li>
        
    </ul>
    <br>
    
    <br>
    <ul class="list">
      <li><img class="imgs" src="data:image/jpeg;base64,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" alt=""></li>
      <li>Mouse</li>
      <li class="p">Price:-100Rs</li>
    
      <p>Model Name <br>
        KB MICE_BO 300 USB Mouse <br>
        System Requirements <br>
        WinXP/Vista/7/8/10/11<br>
        Form Factor<br>
        Left & Right Hand Both<br>
        Sales Package<br>
        1 USB Mouse<br>
        Frames per Second<br>
        1600<br>
        Compatible Devices<br>
        </p>
    </ul>
  <br>
  
  `
    // }


  

    // let e = document.createTextNode("ram")
    // c.append(e);
    // let e1 = document.createTextNode("ram2")
    // c1.append(e1);
    
 



    




}