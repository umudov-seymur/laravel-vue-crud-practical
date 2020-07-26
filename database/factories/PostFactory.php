<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Category;
use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title' => $faker->name(),
        'category_id' => Category::all()->random()->id,
        'text' => $faker->text(20)
    ];
});
