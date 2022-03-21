import './Footer.scss';

const Footer = () => {
    return ( 
<footer>
<div class="row primary">
  <div class="column about">

  <h3>Netflix@2022</h3>

   <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
      voluptatem corporis error non,
  </p>


</div>

<div class="column links">
<h3>Support</h3>

 <ul>

  <li>
   <a href="#faq">F.A.Q</a>
  </li>
  <li>
   <a href="#cookies-policy">Cookies Policy</a>
  </li>
  <li>
   <a href="#terms-of-services">Terms Of Service</a>
  </li>
  <li>
   <a href="#support">Support</a>
  </li>
 </ul>

</div>


<div class="column links">
  <h3>Contact</h3>
   <ul>
    <li>
     <a href="#faq">F.A.Q</a>
    </li>
    <li>
     <a href="#cookies-policy">Cookies Policy</a>
    </li>
    <li>
    <a href="#terms-of-services">Terms Of Service</a>
    </li>
    <li>
    <a href="#support">Support</a>
    </li>
  </ul>
</div>

<div class="column subscribe">
 <h3>Newsletter</h3>
  <div>
   <input type="email" placeholder="Netflix@gmail.com" />
   <button>Service code</button>
  </div>
  <p>Copyright &copy; 2021 Foolish Developer</p>

</div>

</div>

</footer>

     );
}
 
export default Footer;