<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/post-list">Laravel Vue</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left Side Of Navbar -->
        <ul class="navbar-nav mr-auto"></ul>

        <!-- Right Side Of Navbar -->
        <ul class="navbar-nav ml-auto">
          <router-link to="/post-list" tag="li" class="nav-item">
            <a href="#" class="nav-link font-weight-bold">Post List</a>
          </router-link>
          <router-link to="/add-new-post" tag="li" class="nav-item">
            <a href="#" class="nav-link font-weight-bold">Add New Post</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>
