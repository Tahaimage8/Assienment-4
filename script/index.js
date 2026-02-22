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
        filterSection.classList.remove('hidden');
    }
    else if(id == 'tab-all'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }else if(id == 'rejected-tab'){
  allCardSection.classList.add('hidden');
  filterSection.classList.remove('hidden');
   renderRejected(); 
     }
}



mainContainer.addEventListener('click', function(event){

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

RejectedList = RejectedList.filter(item => item.cardTitle !== cardTitle);
  CalculateCount()
    renderInterview()



 }
 else if(event.target.classList.contains('rejected-btn')){
    const parentN = event.target.parentNode.parentNode;
  const cardTitle = parentN.querySelector('.card-title').innerText;
  const light = parentN.querySelector('.light').innerText;
  const small = parentN.querySelector('.small').innerText;
  const statusS = parentN.querySelector('.status').innerText;
  const down = parentN.querySelector('.down').innerText;
  const notes = parentN.querySelector('.ma').innerText;





  
  const cardInfo ={
    cardTitle,
    light,
    small, 
    statusS : 'Reject',
    down,
    notes
}
  parentN.querySelector('.status').innerText = 'Reject';
  parentN.querySelector('.status').style.color = 'red';
  parentN.querySelector('.status').style.backgroundColor = '#FFCCCB';
  parentN.querySelector('.status').style.width = '60px';
  parentN.querySelector('.status').style.padding = '5px';
const titleExist =  RejectedList.find(item=> item.cardTitle == cardInfo.cardTitle) ;



  if(!titleExist){
    RejectedList.push(cardInfo);
  }
    InterviewList = InterviewList.filter(item => item.cardTitle !== cardTitle);
  CalculateCount()
    renderRejected()
 }
else if (event.target.closest('.delete-btn')) {

  const card = event.target.closest('.card');
  const cardTitle = card.querySelector('h3').innerText;

  // DOM থেকে remove
  card.remove();

  InterviewList = InterviewList.filter(item => item.cardTitle !== cardTitle);



  CalculateCount();


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
                                        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    
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




function renderRejected(){
   filterSection.innerHTML = ''


   for(let rejected of RejectedList){

    // console.log(rejected);
    
    let div = document.createElement('div');
    div.className = 'card shadow-2xl p-5 mt-10 border-2  border-[white]'
    div.innerHTML =                       `<div class="card-title flex justify-between">
                                        <h3 class="font-bold text-[16px]">${rejected.cardTitle}</h3>
                                        <button id="delete-box-mobile"><i class="fa-solid fa-trash"></i></button>
    
                                        </div>
                                        <p class="light opacity-50">${rejected.light}</p>
<br>
                                        <p class="small opacity-30"> ${rejected.small}</p>
                                        <span><p id="Applied-form-mobile" class="bg-[#FFCCCB] text-[red] h-10 w-[60px] p-1 font-bold mt-2 status">
                                        ${rejected.statusS}
                                        </p></span>
                                        <br>
                                        <p class="down">${rejected.down}</p>
                                        <br>
                                        <div class="button-in-body-foot flex gap-3 ma">
                                        <button id="body-foot-interview-mobile" class="border border-green-600 p-1 font-bold cursor-pointer">Interview</button> 
                                        <button id="body-foot-rejected-mobile" class="border border-red-600 p-1 font-bold text-red-600 cursor-pointer">Rejected</button>
                                        </div>`

                                        filterSection.appendChild(div);
   }
}
