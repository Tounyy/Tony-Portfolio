const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > -100) {
		header.style.backgroundColor = 'rgba(0, 0, 0, 0.534)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

var typed = new Typed(".auto-type", {
    strings: ["Frontend Developer", "Web Designer"],
    typeSpeed: 200,
    backSpeed: 250,
    loop: true
})

function sendEmail(){
	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "tonyluu125576@gmail.com",
		Password : "478026E38680BB8246BC12ACD239AB551AE8",
		To : 'luutony82@gmail.com',
		From : document.getElementById("email").value,
		Subject : "New Contact Form Enquiry",
		Body : "And this is the body"
	}).then(
	message => alert("Message Send Succesfully")
	);
}