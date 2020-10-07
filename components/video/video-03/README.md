## WordPress Integration

Use the following guide to add the *Video* module to your website:

- Go to the Assets tab

- Download the `acf.json` file from the assets tab 

- Go to the Wordpress Admin panel

- Go to Custom Fields > Tools and import your acf file
- - This will create a Videos field grop on the "pages" of your website

- Go to the page you wish to add a video to

- Enter the content in the ACF fields

- In your theme, create a `_views/_components/video.twig` file

- Go to Fractal and copy the code you would like from the View tab

- Paste the code into `_views/_components/video.twig`

- Open the twig template where you would like to include your video

- Paste the below include within the `{% block content %}` block
```{% include "_components/video.twig" with {
    video: post.meta('video'),
    subheading: post.meta('video_subheading'),
    heading: post.meta('video_heading'),
    content: post.meta('video_content'),
} %}```