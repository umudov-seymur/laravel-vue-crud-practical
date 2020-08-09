<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;
use App\Http\Resources\PostSingle;
use App\Http\Resources\PostCollection;

class PostController extends Controller
{
    public function __construct()
    {
        // request()->headers->set('Accept', 'application/json');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->has('category')) {
            $posts = Post::whereHas('category', fn ($query) => $query
                ->where('category_id', $request->category))
                ->latest();
        } else {
            $posts = Post::latest();
        }
        return new PostCollection($posts->with('category')->paginate(5));
    }

    /*
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {
        // $newPath = $request->file('photo')->store('photos');
        return Post::create($request->except('photo'));
    }

    /**
     * Display the specified resource.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function show(Request $request, Post $post)
    {
        return new PostSingle($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PostRequest $request, Post $post)
    {
        $post->update($request->validated());
        return $post;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        return $post->delete();
    }
}
