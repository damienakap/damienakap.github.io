---
layout: default
author: Damien Apilando
---
<style>
  .project_card {
    display: grid;
    overflow:hidden;
    margin-top: 1em;
    background-color: var(--theme_dark_1);
    grid-template-columns: 1fr;
    grid-template-rows: 30em auto;
    height: auto;
  }

  @media only screen and  (min-width: 768){
    .project_card {
      grid-template-columns: 60% auto;
      height: 30em;
    }
  }
  
  .project_card_image {
    align-self: center;
    justify-self: center;
    min-height: 100%;
    min-width: 100%;
  }
  .project_card_wrapper {
    max-width: 100%;
    max-height: 100%;
    padding: 1em;
    background-color: var(--theme_dark_2);
    color:white;
  }

  .project_card_link {
    display: grid;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  


</style>

<div class="project_card">
  <a href="" class="project_card_link">
    <img src="https://live.staticflickr.com/1456/26264880836_e5627524ab_b.jpg" class="project_card_image"/>
  </a>
  <div class="project_card_wrapper">
    <h2>Project 1</h2>
    <p>Here is where the description of a project would go. It should only be a short summary, with a link to a dedicated project page.</p>
  </div>
</div>

<div class="project_card">
  <a href="" class="project_card_link">
    <img src="https://live.staticflickr.com/1456/26264880836_e5627524ab_b.jpg" class="project_card_image"/>
  </a>
  <div class="project_card_wrapper">
    <h2>Project 1</h2>
    <p>Here is where the description of a project would go. It should only be a short summary, with a link to a dedicated project page.</p>
  </div>
</div>
