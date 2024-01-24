document.getElementById("hello").innerText = "Привет, JavaScript!"

const array=[{words:"word"},
{words:"tiger"},
{words:"key"},
{words:"hello"},
{words:"symbol"}
] 

function createdList(title){
  const container=document.createElement("div");
  const listNode=document.createElement("ul");
  const wordNode=document.createElement("li");

  wordNode.innerText=title;

  container.append(listNode);
  listNode.append(wordNode);
  return(container)
}

  function createPoste(obj){
  const dom=document.querySelector('#dom')
  obj.forEach(({words})=>dom.append(createdList(words)));
  }
  createPoste(array);

  const mas=["word","tiger","key","hello","symbol"];
 
  
  function nummerList(mas){
    const ListNode = document.createElement("ol")
      mas.forEach(elem =>{
          const PunktNode=document.createElement("li");
          PunktNode.innerText=elem;
          ListNode.append(PunktNode);
      })
  return ListNode;
  }
const root= document.querySelector("#dom");
root.append(nummerList(mas))


  const array1=[
  {label:"word", link:"https://google.com"},
  {label:"tiger", link:"https://google.com"},
  {label:"key", link:"https://google.com"},
  {label:"hello", link:"https://google.com"},
  {label:"symbol", link:"https://google.com"}
  ] 

function createTopic(label,link){
    const container1=document.createElement("div");
    const listNode=document.createElement("ul");
    const linkNode = document.createElement("a");
    const wordNode=document.createElement("li");
    linkNode.innerText = label ;
    linkNode.href=link
    wordNode.append(linkNode)
    listNode.append(wordNode)
    container1.append(listNode);
    return(container1)
}


function createPost(obj){
const root=document.querySelector('#root')
obj.forEach(({label, link})=>root.append(createTopic(label,link)));
}
createPost(array1);







