---
layout: default
author: Damien Apilando
---
<style>
  .about_card {
    display: grid;
    grid-template-columns: 40% auto;
    background-color: var(--theme_dark_1);
    margin-top: 1em;
    height: 30em;
    overflow:hidden;
  }
  .about_card_image {
    align-self: center;
    justify-self: center;
    min-height: 100%;
    min-width: 100%;
  }
  .about_card_wrapper {
    max-width: 100%;
    max-height: 100%;
    padding: 1em;
    background-color: var(--theme_dark_2);
    color:white;
    line-height: 2;
  }

  @media only screen and  (min-width < 1024px){
    .about_card {
    grid-template-columns: 1fr;
    grid-template-rows: 30em auto;
    height: auto;
    }
  }
</style>

<div class="about_card">
  <img src="https://live.staticflickr.com/1456/26264880836_e5627524ab_b.jpg" class="about_card_image"/>
  <div class="about_card_wrapper">
    <h2>Damien Apilando</h2>
    <p><small><em>User Experience Designer</em></small><br/><br/>
      I am an aspiring UX Designer and currently working on completing the UX Designer Certification Course by Google. I am also finishing my 4-year degree program at the University of Hawaii at Manoa.
    </p>
  </div>
</div>
