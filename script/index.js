let InterviewList = [];
let RejectedList =[];



let total = document.getElementById('header-total-count');
let InterviewCountIs2 =  document.getElementById('header-interview-count');
let RejectViewCountIs2 =  document.getElementById('header-reject-count');


const tabAll = document.getElementById('tab-all');
const interviewTab = document.getElementById('interview-tab');
const rejectTab = document.getElementById('rejected-tab')


const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filted-section');



function CalculateCount() {
    total.innerText = allCardSection.children.length ;
    InterviewCountIs2.innerText = InterviewList.length;
    RejectViewCountIs2.innerText = RejectedList.length;
}


CalculateCount();



function toggleStyle(id){
    // console.log('click' , id);
    

    if(id== 'interview-tab'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
    }
    else if(id == 'tab-all'){
        allCardSection.classList.remove('hidden');
    }
}



mainContainer.addEventListener('click', function(event){

    console.log(event.target.classList.contains('interview-btn'));
    
 if(event.target.classList.contains('interview-btn')){
    const parentN = event.target.parentNode.parentNode;
  const cardTitle = parentN.querySelector('.card-title').innerText;
  const light = parentN.querySelector('.light').innerText;
  const small = parentN.querySelector('.small').innerText;
  const statusS = parentN.querySelector('.status').innerText;
  const down = parentN.querySelector('.down').innerText;
  const notes = parentN.querySelector('.ma').innerText;

//   console.log(cardTitle , light,small,statusS,down,notes);



  
  const cardInfo ={
    cardTitle,
    light,
    small, 
    statusS : 'Interview',
    down,
    notes
}
  parentN.querySelector('.status').innerText = 'Interview';
  parentN.querySelector('.status').style.color = 'green';
  parentN.querySelector('.status').style.backgroundColor = 'lightGreen';
  parentN.querySelector('.status').style.width = '85px';
  parentN.querySelector('.status').style.padding = '5px';
const titleExist =  InterviewList.find(item=> item.cardTitle == cardInfo.cardTitle) ;

  
//   parentN.querySelector('.status').style.padding = '5px';

  


  if(!titleExist){
    InterviewList.push(cardInfo);
  }
  CalculateCount()
    renderInterview()
 }
  
})


function renderInterview(){
   filterSection.innerHTML = ''


   for(let interview of InterviewList){

    console.log(interview);
    
    let div = document.createElement('div');
    div.className = 'card shadow-2xl p-5 mt-10 border-2  border-[white]'
    div.innerHTML =                       `<div class="card-title flex justify-between">
                                        <h3 class="font-bold text-[16px]">${interview.cardTitle}</h3>
                                        <button id="delete-box-mobile"><i class="fa-solid fa-trash"></i></button>
    
                                        </div>
                                        <p class="light opacity-50">${interview.light}</p>
<br>
                                        <p class="small opacity-30"> ${interview.small}</p>
                                        <span><p id="Applied-form-mobile" class="bg-green-200 text-green-700 h-10 w-[85px] p-1 font-bold mt-2 status">
                                        ${interview.statusS}
                                        </p></span>
                                        <br>
                                        <p class="down">${interview.down}</p>
                                        <br>
                                        <div class="button-in-body-foot flex gap-3 ma">
                                        <button id="body-foot-interview-mobile" class="border border-green-600 p-1 font-bold cursor-pointer">Interview</button> 
                                        <button id="body-foot-rejected-mobile" class="border border-red-600 p-1 font-bold text-red-600 cursor-pointer">Rejected</button>
                                        </div>`

                                        filterSection.appendChild(div);
   }
}












/////////// this is start by mine



// const headerInterviewCount = document.getElementById('header-interview-count');

// document.getElementById('body-foot-interview-mobile').addEventListener('click',function(){
// const notAppliedMobile = document.getElementById('Applied-form-mobile');



//     if(notAppliedMobile.innerText === 'Interview' || 
//        notAppliedMobile.innerText === 'Reject'){
//         return;
//     }







// notAppliedMobile.innerText = 'Interview';
// notAppliedMobile.style.color = 'green';
// notAppliedMobile.style.backgroundColor = 'lightGreen';
// notAppliedMobile.style.width = '85px';
// notAppliedMobile.style.padding = '5px';






//  let currentValue = parseInt(headerInterviewCount.innerText);

//     if(isNaN(currentValue)){
//         currentValue = 0;
//     }

//     headerInterviewCount.innerText = currentValue + 1;
    
// })









// const headerRejectCount = document.getElementById('header-reject-count');

// document.getElementById('body-foot-rejected-mobile').addEventListener('click',function(){



// const notAppliedMobile = document.getElementById('Applied-form-mobile');


//     if(notAppliedMobile.innerText === 'Interview' || 
//        notAppliedMobile.innerText === 'Reject'){
//         return;
//     }


// notAppliedMobile.innerText = 'Reject';
// notAppliedMobile.style.color = 'red';
// notAppliedMobile.style.backgroundColor = '#FFCCCB';
// notAppliedMobile.style.width = '60px';
// notAppliedMobile.style.padding = '5px';






//  let currentValue = parseInt(headerRejectCount.innerText);

//     if(isNaN(currentValue)){
//         currentValue = 0;
//     }

//     headerRejectCount.innerText = currentValue + 1;
    
// })





///////////////// end by mine 





//--------------------------------------------------------------------------------------------

// inter view button 
// inter view click er por green hoiya jaibo  not applied ta hoibo interview lekha uthbo 
// heaader ere inter view count 1 hoibo 






// reject button
// inter view click er por green hoiya jaibo  not applied ta hoibo reject lekha uthbo
//  // heaader ere reject  count 1 hoibo 





















//--------------------------------------------------------------------------------------------

// inter view button 
// inter view click er por green hoiya jaibo  not applied ta hoibo interview lekha uthbo 
// heaader ere inter view count 1 hoibo 






// reject button
// inter view click er por green hoiya jaibo  not applied ta hoibo reject lekha uthbo
//  // heaader ere reject  count 1 hoibo 
























//--------------------------------------------------------------------------------------------

// inter view button 
// inter view click er por green hoiya jaibo  not applied ta hoibo interview lekha uthbo 
// heaader ere inter view count 1 hoibo 






// reject button
// inter view click er por green hoiya jaibo  not applied ta hoibo reject lekha uthbo
//  // heaader ere reject  count 1 hoibo 





















//--------------------------------------------------------------------------------------------

// inter view button 
// inter view click er por green hoiya jaibo  not applied ta hoibo interview lekha uthbo 
// heaader ere inter view count 1 hoibo 






// reject button
// inter view click er por green hoiya jaibo  not applied ta hoibo reject lekha uthbo
//  // heaader ere reject  count 1 hoibo 



















//--------------------------------------------------------------------------------------------

// inter view button 
// inter view click er por green hoiya jaibo  not applied ta hoibo interview lekha uthbo 
// heaader ere inter view count 1 hoibo 






// reject button
// inter view click er por green hoiya jaibo  not applied ta hoibo reject lekha uthbo
//  // heaader ere reject  count 1 hoibo 



















//--------------------------------------------------------------------------------------------

// inter view button 
// inter view click er por green hoiya jaibo  not applied ta hoibo interview lekha uthbo 
// heaader ere inter view count 1 hoibo 






// reject button
// inter view click er por green hoiya jaibo  not applied ta hoibo reject lekha uthbo
//  // heaader ere reject  count 1 hoibo 


















//--------------------------------------------------------------------------------------------

// inter view button 
// inter view click er por green hoiya jaibo  not applied ta hoibo interview lekha uthbo 
// heaader ere inter view count 1 hoibo 






// reject button
// inter view click er por green hoiya jaibo  not applied ta hoibo reject lekha uthbo
//  // heaader ere reject  count 1 hoibo 















//--------------------------------------------------------------------------------------------

