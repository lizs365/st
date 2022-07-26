# st.js
## JavaScript, SimpleTool.
## Install st.js
To add st.js to your site, use the following script...

```
<script src="https://lizs365.github.io/st/st.js"></script>
<script>
// You can use st.js functions here!
// log(calc('(2+2)*4')); will log 16 to the console.
</script>
```
You can also replace `https://lizs365.github.io/st/st.js` with one of the following links if you want...

- `https://cdn.jsdelivr.net/gh/lizs365/st@latest/st.js`


## st.js Functions
- `log(x)` - Logs `x` to the console.
- `timeS(x)` - Starts a timer, `x` is the name of the timer to log to the console.
- `timeE(x)` - Stops a timer that was previously started by calling timeS().
- `getParam(x)` - Returns the URL GET parameter `x`, if it exists.
- `calc(x)` - Returns the answer to math equation `x`.
- `goUrl(x)` - Redirects the user to `x`, simulating a link click.
- `redirectUrl(x)` - Redirects the user to `x`, simulating an HTTP redirect.

## Ways to Use st.js
### Here's a few examples of how you can use st.js for your website! (st.js will keep releasing functions and more examples will be written soon!)
### Redirect (link click)

With pure JavaScript (48 characters):

```
window.location.href = "https://www.google.com";
```

With st.js (32 characters)
```
goUrl('https://www.google.com');
```
### Log GET parameter `x` to Console

With pure JavaScript (109 Characters)

```
var url_string = window.location.href;
var url = new URL(url_string);
console.log(url.searchParams.get('x'));
```

With st.js (19 Characters)

```
log(getParam('x'));
```
