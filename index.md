---
layout: default
author: Damien Apilando
---
<section>

<style>
  .project_card {
    display: grid;
    grid-template-columns: 60% auto;
    background-color: var(--theme_background_color);
    margin-top: 1em;
  }
  .project_card_image {
    align-self: center;
    justify-self: center;
    max-width: 100%;
    max-height: 30em;
  }
  .project_card_wrapper {
    width: 100%;
    height: 30em;
    padding: 1em;
    background-color: var(--theme_primary_color);
  }
    
  @media only screen and ( width < 768px) {
    .project_card {
    grid-template-columns: 1fr;
    }
    .project_card_wrapper {
      height:auto;
    }
  }
</style>

<div class="project_card">
  <img src="https://live.staticflickr.com/1456/26264880836_e5627524ab_b.jpg" class="project_card_image"></img>
  <div class="project_card_wrapper">
    <h2>Project 1</h2>
    <p>Here is where the description of a project would go. It should only be a short summary, with a link to a dedicated project page.</p>
  </div>
</div>
  
</section>
