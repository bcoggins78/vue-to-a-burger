<template>
  <div class="devoured">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center enter_section">
          <form class="create-form">
            <input type="text" class="form-control" name="burger_name" value id="enter_text">
            <button type="submit" class="btn btn-primary" id="text-enter-button">Submit</button>
          </form>
          <p>Enter a burger you want to eat Click the "Submit" button.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Devoured",
  props: {
    msg: String
  }
};
</script>


<style>
.enter_section {
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}

#enter_text {
  width: 400px;
  height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto;
  font-size: 38px;
}

#text-enter-button {
  margin-top: 10px;
  margin-bottom: 18px;
}
</style>
