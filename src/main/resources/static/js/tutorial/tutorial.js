//tutorial modal created
var tutorialModal = document.createElement("div");
tutorialModal.id = "tutorial";
tutorialModal.className = "modal hide";

//header of modal created
var modalHeader = document.createElement("div");
modalHeader.className = "modal-header";

//close button of modal created in header
var closeButton = document.createElement("button");
closeButton.setAttribute("data-dismiss", "modal");
closeButton.className = "close";
closeButton.type = "button";
closeButton.appendChild(document.createTextNode("skip>>"));

//close button is attached in header
modalHeader.appendChild(closeButton);

//modal heading is created
var modalHeading = document.createElement("h3");
modalHeading.appendChild(document.createTextNode("Tutorial"));

//modal heading is atteched in modal header
modalHeader.appendChild(modalHeading);

//header of modal is attached with main modal
tutorialModal.appendChild(modalHeader);

//modal body is created
var modalBody = document.createElement("div");
modalBody.className = "modal-body";

//body title is created in this will show the page of body
var bodyTitle = document.createElement("div");
bodyTitle.className = "widget-title";

//pageTab created
var pageTab = document.createElement("ul");
pageTab.className = "nav nav-tabs";
//pageTab.setAttribute("data-toggle", "tab");

var pageTabList = document.createElement("li");
pageTabList.className = "active";

var pageTabListContent = document.createElement("a");
pageTabListContent.id = "pageNumberText";
pageTabListContent.innerHTML = "1/9";
pageTabListContent.href = "javascript:void(0)";

var input = document.createElement("input");
input.id = "pageNumberValue";
input.type = "hidden";
input.value = 0;

pageTabList.appendChild(input);

pageTabList.appendChild(pageTabListContent);

pageTab.appendChild(pageTabList);

//pageTab appended in body title
bodyTitle.appendChild(pageTab);

//body title is attached in modal body
modalBody.appendChild(bodyTitle);

var modalContent = document.createElement("div");
modalContent.className = "widget-content tab-content";

var tab = document.createElement("div");
tab.id = "tab1";

var center = document.createElement("center");

var mainHeader = document.createElement("h3");
mainHeader.id = "mainHeader";
mainHeader.appendChild(document.createTextNode("Welcome to Resume Builder!"));

center.appendChild(mainHeader);

var secondHeader = document.createElement("h6");
secondHeader.id = "secondHeader";
secondHeader.appendChild(
  document.createTextNode(
    "This short tutorial will walk you through all of the features of this application."
  )
);

center.appendChild(secondHeader);

tab.appendChild(center);

var center = document.createElement("center");

var tabParagraph = document.createElement("p");
tabParagraph.id = "paraContent";
tabParagraph.innerHTML =
  'If you want to dive right in, feel free to click the "Skip" button above. Otherwise, press "Next"!';

center.appendChild(tabParagraph);

tab.appendChild(center);

var center = document.createElement("center");

var tabImg = document.createElement("img");
tabImg.id = "paraImg";
tabImg.src = "img/logo.png";
tabImg.title = "tutorialImg";

center.appendChild(tabImg);

tab.appendChild(center);

modalContent.appendChild(tab);

modalBody.appendChild(modalContent);

//modal body is attached in modal
tutorialModal.appendChild(modalBody);

//modal footer is created
var modalFooter = document.createElement("div");
modalFooter.className = "modal-footer";

var previous = document.createElement("a");
previous.id = "previous";
previous.className = "btn btn-primary";
//previous.setAttribute("data-toggle", "tab");
previous.href = "javascript:void(0);";
//previous.href = "#tab1";
previous.appendChild(document.createTextNode("previous"));

modalFooter.appendChild(previous);

var next = document.createElement("a");
next.href = "javascript:void(0);";
next.id = "next";
next.className = "btn btn-primary";
//next.setAttribute("data-toggle", "tab");
//next.href = "#tab1";
next.appendChild(document.createTextNode("next"));

modalFooter.appendChild(next);

//modal footer is attached
tutorialModal.appendChild(modalFooter);

document.getElementById("content").appendChild(tutorialModal);

tutorialData = [
  {
    pageNumber: 0,
    mainHeader: "Welcome to Resume Builder!",
    secondHeader:
      "This short tutorial will walk you through all of the features of this application.",
    paraContent:
      'If you want to dive right in, feel free to click the "Skip" button above. Otherwise, press "Next"!',
    paraImg: "img/logo.png",
  },
  {
    pageNumber: 1,
    mainHeader: "What features we have?",
    secondHeader: "Sidebar Menu",
    paraContent:
      "This application works on the user data all the links in the sidebar menu will lead you to multiple interfaces were user have to insert the data by filling various forms",
    paraImg: "img/demo/sidebar.png",
  },
  {
    pageNumber: 2,
    mainHeader: "Add General information",
    secondHeader: "1. Personal Information",
    paraContent:
      "All the information provided by user will directly get displayed on the user website. User can always edit information the current information will be get displayed on the profile card, left side of the form.",
    paraImg: "img/demo/personal-form.png",
  },
  {
    pageNumber: 3,
    mainHeader: "Add General information",
    secondHeader: "2. Contact Information",
    paraContent:
      "Contact information is divided into two two parts one is useing you personal contact number,email address the second parts is for social contact where user put their social profile id, this information will displayed on the website.",
    paraImg: "img/demo/contact-form.png",
  },
  {
    pageNumber: 4,
    mainHeader: "Add Education Information",
    secondHeader: "add your academic records",
    paraContent:
      "This part will showcase all the academic records on the website, all user have to do is to add the relevent information.",
    paraImg: "img/demo/education.png",
  },
  {
    pageNumber: 5,
    mainHeader: "Add Courses",
    secondHeader: "What Courses you have enrolled/Completed ?",
    paraContent:
      "Course will help users to show their interest in subjects/ Technologies. User can always edit or delete course.",
    paraImg: "img/demo/course.png",
  },
  {
    pageNumber: 6,
    mainHeader: "Add Certifications",
    secondHeader: "What are your acheivements ?",
    paraContent:
      "Certifications is used to showcase achivement on core subject areas, some experiences or participations will also help!",
    paraImg: "img/demo/certification.png",
  },
  {
    pageNumber: 7,
    mainHeader: "Add Techincal Skills/Tools/Knowledge",
    secondHeader:
      "What knowledge do you have? any tools/ language that you can play with?",
    paraContent:
      "Technical Skills are the core skill that show users credibility in industries. Add only relevent and work oriented skills.",
    paraImg: "img/demo/technicalSKill.png",
  },
  {
    pageNumber: 8,
    mainHeader: "Add Soft skills/ passion",
    secondHeader: "What is your interest other than work/technical?",
    paraContent:
      "Theses skills will tell about user personality? It is 2-3 skills.",
    paraImg: "img/demo/otherSKill.png",
  },
  {
    pageNumber: 9,
    mainHeader: "Add Job/Internship Experience",
    secondHeader:
      "You can always add your job experiences here/ if freshers add internships",
    paraContent:
      "Job experience for professional is not more than previous job but for freshers Internship shows that candidate is comfortable in working under industrial environment.",
    paraImg: "img/demo/jobinternship.png",
  },
  {
    pageNumber: 10,
    mainHeader: "Add Voluteer Experience",
    secondHeader:
      "If you are part of some social work, Event where you have managed event or worked with teams you mention that here",
    paraContent:
      "Volunteer work shows that how employable user is?, it show that user is also socially active in industries this help to create professional network.",
    paraImg: "img/demo/volunteer.png",
  },
  {
    pageNumber: 11,
    mainHeader: "Add Project work",
    secondHeader:
      "All the college project, competition projects, study projects you can mention any of them",
    paraContent:
      "Project shows hands on experience with different types of tools and technologies. Try to add projects that can show your interest, skills.",
    paraImg: "img/demo/project.png",
  },
  {
    pageNumber: 12,
    mainHeader: "Choose Template",
    secondHeader:
      "After all your data inserition. It is time to choose template. You can change your template whenever you want",
    paraContent:
      "In Template section we have provided variety of templates, user can see demo of template first and than can try them. Note: try to template based on the data inserted.",
    paraImg: "img/demo/template.png",
  },
  {
    pageNumber: 13,
    mainHeader: "Manage View",
    secondHeader:
      "If you want to save some data and do not want to publish now you can hide it using manage view.",
    paraContent:
      "For example if user is creating resume for two industries web development and for markting but for instance user want to show only marketing industries on website than user can hide the web development data from others using this manage section.",
    paraImg: "img/demo/view.png",
  },
  {
    pageNumber: 14,
    mainHeader: "Visit Site :)",
    secondHeader:
      "After Template selection if you want to Visit your site you can just click on it!",
    paraContent: "Third Page Content",
    paraImg: "img/demo/visit_site.png",
  },
  {
    pageNumber: 15,
    mainHeader: ":) Enjoy :) ",
    secondHeader:
      "I hope this tool will help you to create an awesome porfolio website without even writing a single line for code! ",
    paraContent:
      "Share this tool with your friends and help them in building website portfolio",
    paraImg: "img/demo/thumb.jpg",
  },
];
console.log(tutorialData);

document.getElementById("next").onclick = function () {
  var pageNumberValue = parseInt(
    document.getElementById("pageNumberValue").value
  );
  var mainHeader = document.getElementById("mainHeader");
  var secondHeader = document.getElementById("secondHeader");
  var pageNumberText = document.getElementById("pageNumberText");
  var paraContent = document.getElementById("paraContent");
  var paraImg = document.getElementById("paraImg");

  if (pageNumberValue >= tutorialData.length - 1) return;

  var content = tutorialData[pageNumberValue + 1];

  console.log(content);
  mainHeader.innerHTML = content.mainHeader;
  secondHeader.innerHTML = content.secondHeader;
  pageNumberText.innerHTML = content.pageNumber + 1 + "/" + tutorialData.length;
  paraContent.innerHTML = content.paraContent;
  paraImg.src = content.paraImg;
  document.getElementById("pageNumberValue").value = content.pageNumber;
};

///previous page
document.getElementById("previous").onclick = function () {
  console.log("hello");
  var pageNumberValue = parseInt(
    document.getElementById("pageNumberValue").value
  );
  var mainHeader = document.getElementById("mainHeader");
  var secondHeader = document.getElementById("secondHeader");
  var pageNumberText = document.getElementById("pageNumberText");
  var paraContent = document.getElementById("paraContent");
  var paraImg = document.getElementById("paraImg");

  console.log(pageNumberValue);

  if (pageNumberValue <= 0) return;

  var content = tutorialData[pageNumberValue - 1];

  mainHeader.innerHTML = content.mainHeader;
  secondHeader.innerHTML = content.secondHeader;
  pageNumberText.innerHTML = content.pageNumber + 1 + "/" + tutorialData.length;
  paraContent.innerHTML = content.paraContent;
  paraImg.src = content.paraImg;
  document.getElementById("pageNumberValue").value = content.pageNumber;
};
