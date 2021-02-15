<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input">
        </div>
      </div>

      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Text input" value="bulma">
          <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
          <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
        </div>
        <p class="help is-success">This username is available</p>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
          <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
          <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
      </div>

      <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox">
            I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="radio">
            <input type="radio" name="question">
            Yes
          </label>
          <label class="radio">
            <input type="radio" name="question">
            No
          </label>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="block">
        这是一个block
      </div>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure>
              <img src="" alt="Image">
            </figure>
          </div>

          <div class="media-content">
            <div class="content">
              主要内容
            </div>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
              </a>
              <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
              </a>
              <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
              </a>
            </div>
          </nav>

        </article>
      </div>

      <div class="buttons">
        <button class="button is-info">Info</button>
        <button class="button is-success">Success</button>
        <button class="button is-warning">Warning</button>
        <button class="button is-danger">Danger</button>
      </div>

      <progress class="progress is-primary" value="15" max="100">15%</progress>
      <progress class="progress is-link" value="30" max="100">30%</progress>
      <progress class="progress is-info" value="45" max="100">45%</progress>
      <progress class="progress is-success" value="60" max="100">60%</progress>
      <progress class="progress is-warning" value="75" max="100">75%</progress>
      <progress class="progress is-danger" value="90" max="100">90%</progress>

    </div>
  </div>
</template>

<script>
export default {
  name: "Calender",

}
</script>

<style scoped>

</style>