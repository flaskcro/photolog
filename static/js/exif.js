



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>exif-js/exif.js at master · jseidelin/exif-js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jseidelin/exif-js" name="twitter:title" /><meta content="exif-js - JavaScript library for reading EXIF image metadata" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/39787?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/39787?v=3&amp;s=400" property="og:image" /><meta content="jseidelin/exif-js" property="og:title" /><meta content="https://github.com/jseidelin/exif-js" property="og:url" /><meta content="exif-js - JavaScript library for reading EXIF image metadata" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="01E7FBE1:67D2:1F150F97:546B5CF6" name="octolytics-dimension-request_id" /><meta content="8087032" name="octolytics-actor-id" /><meta content="flaskcro" name="octolytics-actor-login" /><meta content="f75352eb65e7d8d2c45cb0ff4a8284252431e5f7b756631538e057cca8fd5825" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="qsYjkweDhFbdYJqblVyM2T1eauNtdSJMMg+LIJVFt7MtTQOe7pPGAgq1HA9rAoP/OeAZCbTfDmhau0GxVd6X/g==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-f13af0a459c223b0620883d888c8aa83a30797347a04ce32ef2997a83ba90149.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-22a0054564248c6dd87336e91bca068b1ab49e28ee1062519b3a0722d29da804.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="15173678e9fbcbc11fdf1fca6cc126df">

      
  <meta name="description" content="exif-js - JavaScript library for reading EXIF image metadata">
  <meta name="go-import" content="github.com/jseidelin/exif-js git https://github.com/jseidelin/exif-js.git">

  <meta content="39787" name="octolytics-dimension-user_id" /><meta content="jseidelin" name="octolytics-dimension-user_login" /><meta content="298375" name="octolytics-dimension-repository_id" /><meta content="jseidelin/exif-js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="298375" name="octolytics-dimension-repository_network_root_id" /><meta content="jseidelin/exif-js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jseidelin/exif-js/commits/master.atom" rel="alternate" title="Recent Commits to exif-js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/jseidelin/exif-js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/jseidelin/exif-js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/flaskcro" data-ga-click="Header, go to profile, text:username">
      <img alt="Dae Kyoung Lim" class="avatar" data-user="8087032" height="20" src="https://avatars2.githubusercontent.com/u/8087032?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">flaskcro</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="jseidelin/exif-js">This repository</span>
    </li>
      <li>
        <a href="/jseidelin/exif-js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vqzFj/leCe7rIwpa5iKqK5n97K8WkZpoUvILzSJaZac2HtrmAUd3IVnR9cVcSu4nPjam7wsiJ37LSP/SS8OWcA==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="mEyJuViDjC1H1aBf3vS9oSf5xIMsGgRflsgV1Ev71vGpSenh/wTMzVS95gnttwdxtnSeSqKsQfkNcG/BQb6JPQ==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="298375" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/jseidelin/exif-js/watchers">
        24
      </a>
      <a href="/jseidelin/exif-js/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/jseidelin/exif-js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6qVp9+cFn3q9DBhnCs/F+L/nsvXdJ3nZLnQTt+LkWJxFT+O39tpoZcnvJrjJD8bDx1eRNUTL1U8ZORfZP4h2PA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar jseidelin/exif-js">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/jseidelin/exif-js/stargazers">
          303
        </a>
</form>
    <form accept-charset="UTF-8" action="/jseidelin/exif-js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="N0eCMo55hPpaGrjw4xtwgBv95XdEKEFXA7415Hmiol+7LhsCfZv1aiFDSDeF75IhQln045SCfxxvnV7fw5pX5A==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star jseidelin/exif-js">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/jseidelin/exif-js/stargazers">
          303
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/jseidelin/exif-js/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of jseidelin/exif-js to your account" aria-label="Fork your own copy of jseidelin/exif-js to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/jseidelin/exif-js/network" class="social-count">101</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/jseidelin" class="url fn" itemprop="url" rel="author"><span itemprop="title">jseidelin</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/jseidelin/exif-js" class="js-current-repository" data-pjax="#js-repo-pjax-container">exif-js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/jseidelin/exif-js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/jseidelin/exif-js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jseidelin/exif-js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/jseidelin/exif-js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /jseidelin/exif-js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/jseidelin/exif-js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /jseidelin/exif-js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/jseidelin/exif-js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /jseidelin/exif-js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/jseidelin/exif-js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /jseidelin/exif-js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/jseidelin/exif-js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /jseidelin/exif-js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/jseidelin/exif-js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jseidelin/exif-js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:jseidelin/exif-js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:jseidelin/exif-js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/jseidelin/exif-js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jseidelin/exif-js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/jseidelin/exif-js" class="minibutton sidebar-button" title="Save jseidelin/exif-js to your computer and use it in GitHub Desktop." aria-label="Save jseidelin/exif-js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/jseidelin/exif-js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of jseidelin/exif-js as a zip file"
                   title="Download the contents of jseidelin/exif-js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/jseidelin/exif-js/blob/fdf760cf40ae24749a8b7f8ab6550bd98fd70539/exif.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:2ab528b0f66360bdbd47e65f58eecf3c -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jseidelin/exif-js/blob/master/exif.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/jseidelin/exif-js/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="exif.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jseidelin/exif-js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">exif-js</span></a></span></span><span class="separator"> / </span><strong class="final-path">exif.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Elliot Smith" class="avatar" data-user="83619" height="24" src="https://avatars3.githubusercontent.com/u/83619?v=2&amp;s=48" width="24" />
        <span class="author"><a href="/townxelliot" rel="contributor">townxelliot</a></span>
        <time datetime="2014-10-23T13:23:41Z" is="relative-time">Oct 23, 2014</time>
        <div class="commit-title">
            <a href="/jseidelin/exif-js/commit/7e88633119e423cd561613086f3c9c435cbcc111" class="message" data-pjax="true" title="Allow status === 0 to indicate successful request

This mirrors objectURLToBlob(), which allows status 0 to indicate
success (which it does for local files).">Allow status === 0 to indicate successful request</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>8</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="jseidelin" href="/jseidelin/exif-js/commits/master/exif.js?author=jseidelin"><img alt="Jacob Seidelin" class="avatar" data-user="39787" height="20" src="https://avatars3.githubusercontent.com/u/39787?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="townxelliot" href="/jseidelin/exif-js/commits/master/exif.js?author=townxelliot"><img alt="Elliot Smith" class="avatar" data-user="83619" height="20" src="https://avatars1.githubusercontent.com/u/83619?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="pugwonk" href="/jseidelin/exif-js/commits/master/exif.js?author=pugwonk"><img alt="Chris Rae" class="avatar" data-user="224233" height="20" src="https://avatars2.githubusercontent.com/u/224233?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dmarkow" href="/jseidelin/exif-js/commits/master/exif.js?author=dmarkow"><img alt="Dylan Markow" class="avatar" data-user="8009" height="20" src="https://avatars1.githubusercontent.com/u/8009?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="joeweiss" href="/jseidelin/exif-js/commits/master/exif.js?author=joeweiss"><img alt="Joe Weiss" class="avatar" data-user="656433" height="20" src="https://avatars2.githubusercontent.com/u/656433?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="danielbarela" href="/jseidelin/exif-js/commits/master/exif.js?author=danielbarela"><img alt="Dan" class="avatar" data-user="1648929" height="20" src="https://avatars1.githubusercontent.com/u/1648929?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="joeblynch" href="/jseidelin/exif-js/commits/master/exif.js?author=joeblynch"><img alt="Joe Lynch" class="avatar" data-user="982556" height="20" src="https://avatars2.githubusercontent.com/u/982556?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="thismoderngentleman" href="/jseidelin/exif-js/commits/master/exif.js?author=thismoderngentleman"><img alt="Christopher Lunt" class="avatar" data-user="3836725" height="20" src="https://avatars3.githubusercontent.com/u/3836725?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Jacob Seidelin" data-user="39787" height="24" src="https://avatars1.githubusercontent.com/u/39787?v=2&amp;s=48" width="24" />
            <a href="/jseidelin">jseidelin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Elliot Smith" data-user="83619" height="24" src="https://avatars3.githubusercontent.com/u/83619?v=2&amp;s=48" width="24" />
            <a href="/townxelliot">townxelliot</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Chris Rae" data-user="224233" height="24" src="https://avatars0.githubusercontent.com/u/224233?v=2&amp;s=48" width="24" />
            <a href="/pugwonk">pugwonk</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dylan Markow" data-user="8009" height="24" src="https://avatars3.githubusercontent.com/u/8009?v=2&amp;s=48" width="24" />
            <a href="/dmarkow">dmarkow</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Joe Weiss" data-user="656433" height="24" src="https://avatars0.githubusercontent.com/u/656433?v=2&amp;s=48" width="24" />
            <a href="/joeweiss">joeweiss</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dan" data-user="1648929" height="24" src="https://avatars3.githubusercontent.com/u/1648929?v=2&amp;s=48" width="24" />
            <a href="/danielbarela">danielbarela</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Joe Lynch" data-user="982556" height="24" src="https://avatars0.githubusercontent.com/u/982556?v=2&amp;s=48" width="24" />
            <a href="/joeblynch">joeblynch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Christopher Lunt" data-user="3836725" height="24" src="https://avatars1.githubusercontent.com/u/3836725?v=2&amp;s=48" width="24" />
            <a href="/thismoderngentleman">thismoderngentleman</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>806 lines (716 sloc)</span>
          <span class="meta-divider"></span>
        <span>30.213 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/jseidelin/exif-js/raw/master/exif.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/jseidelin/exif-js/blame/master/exif.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/jseidelin/exif-js/commits/master/exif.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="github-windows://openRepo/https://github.com/jseidelin/exif-js?branch=master&amp;filepath=exif.js" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/jseidelin/exif-js/edit/master/exif.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/jseidelin/exif-js/delete/master/exif.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line">(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line">    <span class="pl-s">var</span> debug <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">    <span class="pl-s">var</span> root <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">    <span class="pl-s">var</span> <span class="pl-en">EXIF</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">        <span class="pl-k">if</span> (obj <span class="pl-k">instanceof</span> EXIF) <span class="pl-k">return</span> obj;</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>(<span class="pl-v">this</span> <span class="pl-k">instanceof</span> EXIF)) <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">EXIF</span>(obj);</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">        <span class="pl-v">this</span>.EXIFwrapped <span class="pl-k">=</span> obj;</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-sv">exports</span> <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-sv">module</span> <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-sv">module</span>.exports) {</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">            <span class="pl-sv">exports</span> <span class="pl-k">=</span> <span class="pl-sv">module</span>.exports <span class="pl-k">=</span> EXIF;</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">        <span class="pl-sv">exports</span>.EXIF <span class="pl-k">=</span> EXIF;</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">        root.EXIF <span class="pl-k">=</span> EXIF;</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">    <span class="pl-s">var</span> ExifTags <span class="pl-k">=</span> EXIF.Tags <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">        <span class="pl-c">// version tags</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">        <span class="pl-c1">0x9000</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ExifVersion<span class="pl-pds">&quot;</span></span>,             <span class="pl-c">// EXIF version</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">        <span class="pl-c1">0xA000</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>FlashpixVersion<span class="pl-pds">&quot;</span></span>,         <span class="pl-c">// Flashpix format version</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">        <span class="pl-c">// colorspace tags</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">        <span class="pl-c1">0xA001</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ColorSpace<span class="pl-pds">&quot;</span></span>,              <span class="pl-c">// Color space information tag</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">        <span class="pl-c">// image configuration</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">        <span class="pl-c1">0xA002</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>PixelXDimension<span class="pl-pds">&quot;</span></span>,         <span class="pl-c">// Valid width of meaningful image</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">        <span class="pl-c1">0xA003</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>PixelYDimension<span class="pl-pds">&quot;</span></span>,         <span class="pl-c">// Valid height of meaningful image</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">        <span class="pl-c1">0x9101</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ComponentsConfiguration<span class="pl-pds">&quot;</span></span>, <span class="pl-c">// Information about channels</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">        <span class="pl-c1">0x9102</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>CompressedBitsPerPixel<span class="pl-pds">&quot;</span></span>,  <span class="pl-c">// Compressed bits per pixel</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">        <span class="pl-c">// user information</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">        <span class="pl-c1">0x927C</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>MakerNote<span class="pl-pds">&quot;</span></span>,               <span class="pl-c">// Any desired information written by the manufacturer</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">        <span class="pl-c1">0x9286</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>UserComment<span class="pl-pds">&quot;</span></span>,             <span class="pl-c">// Comments by user</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">        <span class="pl-c">// related file</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">        <span class="pl-c1">0xA004</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>RelatedSoundFile<span class="pl-pds">&quot;</span></span>,        <span class="pl-c">// Name of related sound file</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">        <span class="pl-c">// date and time</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">        <span class="pl-c1">0x9003</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>DateTimeOriginal<span class="pl-pds">&quot;</span></span>,        <span class="pl-c">// Date and time when the original image was generated</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">        <span class="pl-c1">0x9004</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>DateTimeDigitized<span class="pl-pds">&quot;</span></span>,       <span class="pl-c">// Date and time when the image was stored digitally</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">        <span class="pl-c1">0x9290</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SubsecTime<span class="pl-pds">&quot;</span></span>,              <span class="pl-c">// Fractions of seconds for DateTime</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">        <span class="pl-c1">0x9291</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SubsecTimeOriginal<span class="pl-pds">&quot;</span></span>,      <span class="pl-c">// Fractions of seconds for DateTimeOriginal</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">        <span class="pl-c1">0x9292</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SubsecTimeDigitized<span class="pl-pds">&quot;</span></span>,     <span class="pl-c">// Fractions of seconds for DateTimeDigitized</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">        <span class="pl-c">// picture-taking conditions</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">        <span class="pl-c1">0x829A</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ExposureTime<span class="pl-pds">&quot;</span></span>,            <span class="pl-c">// Exposure time (in seconds)</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">        <span class="pl-c1">0x829D</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>FNumber<span class="pl-pds">&quot;</span></span>,                 <span class="pl-c">// F number</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">        <span class="pl-c1">0x8822</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ExposureProgram<span class="pl-pds">&quot;</span></span>,         <span class="pl-c">// Exposure program</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">        <span class="pl-c1">0x8824</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SpectralSensitivity<span class="pl-pds">&quot;</span></span>,     <span class="pl-c">// Spectral sensitivity</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">        <span class="pl-c1">0x8827</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ISOSpeedRatings<span class="pl-pds">&quot;</span></span>,         <span class="pl-c">// ISO speed rating</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">        <span class="pl-c1">0x8828</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>OECF<span class="pl-pds">&quot;</span></span>,                    <span class="pl-c">// Optoelectric conversion factor</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">        <span class="pl-c1">0x9201</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ShutterSpeedValue<span class="pl-pds">&quot;</span></span>,       <span class="pl-c">// Shutter speed</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">        <span class="pl-c1">0x9202</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ApertureValue<span class="pl-pds">&quot;</span></span>,           <span class="pl-c">// Lens aperture</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">        <span class="pl-c1">0x9203</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>BrightnessValue<span class="pl-pds">&quot;</span></span>,         <span class="pl-c">// Value of brightness</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">        <span class="pl-c1">0x9204</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ExposureBias<span class="pl-pds">&quot;</span></span>,            <span class="pl-c">// Exposure bias</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">        <span class="pl-c1">0x9205</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>MaxApertureValue<span class="pl-pds">&quot;</span></span>,        <span class="pl-c">// Smallest F number of lens</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">        <span class="pl-c1">0x9206</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SubjectDistance<span class="pl-pds">&quot;</span></span>,         <span class="pl-c">// Distance to subject in meters</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">        <span class="pl-c1">0x9207</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>MeteringMode<span class="pl-pds">&quot;</span></span>,            <span class="pl-c">// Metering mode</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">        <span class="pl-c1">0x9208</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>LightSource<span class="pl-pds">&quot;</span></span>,             <span class="pl-c">// Kind of light source</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">        <span class="pl-c1">0x9209</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash<span class="pl-pds">&quot;</span></span>,                   <span class="pl-c">// Flash status</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">        <span class="pl-c1">0x9214</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SubjectArea<span class="pl-pds">&quot;</span></span>,             <span class="pl-c">// Location and area of main subject</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">        <span class="pl-c1">0x920A</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>FocalLength<span class="pl-pds">&quot;</span></span>,             <span class="pl-c">// Focal length of the lens in mm</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">        <span class="pl-c1">0xA20B</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>FlashEnergy<span class="pl-pds">&quot;</span></span>,             <span class="pl-c">// Strobe energy in BCPS</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">        <span class="pl-c1">0xA20C</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SpatialFrequencyResponse<span class="pl-pds">&quot;</span></span>,    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">        <span class="pl-c1">0xA20E</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>FocalPlaneXResolution<span class="pl-pds">&quot;</span></span>,   <span class="pl-c">// Number of pixels in width direction per FocalPlaneResolutionUnit</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">        <span class="pl-c1">0xA20F</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>FocalPlaneYResolution<span class="pl-pds">&quot;</span></span>,   <span class="pl-c">// Number of pixels in height direction per FocalPlaneResolutionUnit</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">        <span class="pl-c1">0xA210</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>FocalPlaneResolutionUnit<span class="pl-pds">&quot;</span></span>,    <span class="pl-c">// Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">        <span class="pl-c1">0xA214</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SubjectLocation<span class="pl-pds">&quot;</span></span>,         <span class="pl-c">// Location of subject in image</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">        <span class="pl-c1">0xA215</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ExposureIndex<span class="pl-pds">&quot;</span></span>,           <span class="pl-c">// Exposure index selected on camera</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">        <span class="pl-c1">0xA217</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SensingMethod<span class="pl-pds">&quot;</span></span>,           <span class="pl-c">// Image sensor type</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">        <span class="pl-c1">0xA300</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>FileSource<span class="pl-pds">&quot;</span></span>,              <span class="pl-c">// Image source (3 == DSC)</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">        <span class="pl-c1">0xA301</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SceneType<span class="pl-pds">&quot;</span></span>,               <span class="pl-c">// Scene type (1 == directly photographed)</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">        <span class="pl-c1">0xA302</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>CFAPattern<span class="pl-pds">&quot;</span></span>,              <span class="pl-c">// Color filter array geometric pattern</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">        <span class="pl-c1">0xA401</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>CustomRendered<span class="pl-pds">&quot;</span></span>,          <span class="pl-c">// Special processing</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">        <span class="pl-c1">0xA402</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ExposureMode<span class="pl-pds">&quot;</span></span>,            <span class="pl-c">// Exposure mode</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">        <span class="pl-c1">0xA403</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>WhiteBalance<span class="pl-pds">&quot;</span></span>,            <span class="pl-c">// 1 = auto white balance, 2 = manual</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">        <span class="pl-c1">0xA404</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>DigitalZoomRation<span class="pl-pds">&quot;</span></span>,       <span class="pl-c">// Digital zoom ratio</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">        <span class="pl-c1">0xA405</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>FocalLengthIn35mmFilm<span class="pl-pds">&quot;</span></span>,   <span class="pl-c">// Equivalent foacl length assuming 35mm film camera (in mm)</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">        <span class="pl-c1">0xA406</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SceneCaptureType<span class="pl-pds">&quot;</span></span>,        <span class="pl-c">// Type of scene</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">        <span class="pl-c1">0xA407</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GainControl<span class="pl-pds">&quot;</span></span>,             <span class="pl-c">// Degree of overall image gain adjustment</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">        <span class="pl-c1">0xA408</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Contrast<span class="pl-pds">&quot;</span></span>,                <span class="pl-c">// Direction of contrast processing applied by camera</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">        <span class="pl-c1">0xA409</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Saturation<span class="pl-pds">&quot;</span></span>,              <span class="pl-c">// Direction of saturation processing applied by camera</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">        <span class="pl-c1">0xA40A</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Sharpness<span class="pl-pds">&quot;</span></span>,               <span class="pl-c">// Direction of sharpness processing applied by camera</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">        <span class="pl-c1">0xA40B</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>DeviceSettingDescription<span class="pl-pds">&quot;</span></span>,    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">        <span class="pl-c1">0xA40C</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SubjectDistanceRange<span class="pl-pds">&quot;</span></span>,    <span class="pl-c">// Distance to subject</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">        <span class="pl-c">// other tags</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">        <span class="pl-c1">0xA005</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>InteroperabilityIFDPointer<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">        <span class="pl-c1">0xA420</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ImageUniqueID<span class="pl-pds">&quot;</span></span>            <span class="pl-c">// Identifier assigned uniquely to each image</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">    <span class="pl-s">var</span> TiffTags <span class="pl-k">=</span> EXIF.TiffTags <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">        <span class="pl-c1">0x0100</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ImageWidth<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">        <span class="pl-c1">0x0101</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ImageHeight<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">        <span class="pl-c1">0x8769</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ExifIFDPointer<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">        <span class="pl-c1">0x8825</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSInfoIFDPointer<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">        <span class="pl-c1">0xA005</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>InteroperabilityIFDPointer<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">        <span class="pl-c1">0x0102</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>BitsPerSample<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">        <span class="pl-c1">0x0103</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Compression<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">        <span class="pl-c1">0x0106</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>PhotometricInterpretation<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">        <span class="pl-c1">0x0112</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Orientation<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">        <span class="pl-c1">0x0115</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SamplesPerPixel<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">        <span class="pl-c1">0x011C</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>PlanarConfiguration<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">        <span class="pl-c1">0x0212</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>YCbCrSubSampling<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">        <span class="pl-c1">0x0213</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>YCbCrPositioning<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">        <span class="pl-c1">0x011A</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>XResolution<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">        <span class="pl-c1">0x011B</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>YResolution<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">        <span class="pl-c1">0x0128</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ResolutionUnit<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">        <span class="pl-c1">0x0111</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>StripOffsets<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">        <span class="pl-c1">0x0116</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>RowsPerStrip<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">        <span class="pl-c1">0x0117</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>StripByteCounts<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">        <span class="pl-c1">0x0201</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>JPEGInterchangeFormat<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">        <span class="pl-c1">0x0202</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>JPEGInterchangeFormatLength<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">        <span class="pl-c1">0x012D</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>TransferFunction<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">        <span class="pl-c1">0x013E</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>WhitePoint<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">        <span class="pl-c1">0x013F</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>PrimaryChromaticities<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">        <span class="pl-c1">0x0211</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>YCbCrCoefficients<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">        <span class="pl-c1">0x0214</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ReferenceBlackWhite<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">        <span class="pl-c1">0x0132</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>DateTime<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">        <span class="pl-c1">0x010E</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ImageDescription<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">        <span class="pl-c1">0x010F</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Make<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">        <span class="pl-c1">0x0110</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Model<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">        <span class="pl-c1">0x0131</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Software<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">        <span class="pl-c1">0x013B</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Artist<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">        <span class="pl-c1">0x8298</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Copyright<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">    <span class="pl-s">var</span> GPSTags <span class="pl-k">=</span> EXIF.GPSTags <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">        <span class="pl-c1">0x0000</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSVersionID<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">        <span class="pl-c1">0x0001</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSLatitudeRef<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">        <span class="pl-c1">0x0002</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSLatitude<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">        <span class="pl-c1">0x0003</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSLongitudeRef<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">        <span class="pl-c1">0x0004</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSLongitude<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">        <span class="pl-c1">0x0005</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSAltitudeRef<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">        <span class="pl-c1">0x0006</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSAltitude<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">        <span class="pl-c1">0x0007</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSTimeStamp<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">        <span class="pl-c1">0x0008</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSSatellites<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">        <span class="pl-c1">0x0009</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSStatus<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">        <span class="pl-c1">0x000A</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSMeasureMode<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">        <span class="pl-c1">0x000B</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSDOP<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">        <span class="pl-c1">0x000C</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSSpeedRef<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">        <span class="pl-c1">0x000D</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSSpeed<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">        <span class="pl-c1">0x000E</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSTrackRef<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">        <span class="pl-c1">0x000F</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSTrack<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">        <span class="pl-c1">0x0010</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSImgDirectionRef<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">        <span class="pl-c1">0x0011</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSImgDirection<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">        <span class="pl-c1">0x0012</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSMapDatum<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">        <span class="pl-c1">0x0013</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSDestLatitudeRef<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">        <span class="pl-c1">0x0014</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSDestLatitude<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">        <span class="pl-c1">0x0015</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSDestLongitudeRef<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">        <span class="pl-c1">0x0016</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSDestLongitude<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">        <span class="pl-c1">0x0017</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSDestBearingRef<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">        <span class="pl-c1">0x0018</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSDestBearing<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">        <span class="pl-c1">0x0019</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSDestDistanceRef<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">        <span class="pl-c1">0x001A</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSDestDistance<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">        <span class="pl-c1">0x001B</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSProcessingMethod<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">        <span class="pl-c1">0x001C</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSAreaInformation<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">        <span class="pl-c1">0x001D</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSDateStamp<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">        <span class="pl-c1">0x001E</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSDifferential<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">    <span class="pl-s">var</span> StringValues <span class="pl-k">=</span> EXIF.StringValues <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">        ExposureProgram <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">            <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Not defined<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">            <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Manual<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">            <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Normal program<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">            <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Aperture priority<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">            <span class="pl-c1">4</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Shutter priority<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">            <span class="pl-c1">5</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Creative program<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">            <span class="pl-c1">6</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Action program<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">            <span class="pl-c1">7</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Portrait mode<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">            <span class="pl-c1">8</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Landscape mode<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">        MeteringMode <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">            <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Unknown<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">            <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Average<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">            <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>CenterWeightedAverage<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">            <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Spot<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">            <span class="pl-c1">4</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>MultiSpot<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">            <span class="pl-c1">5</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Pattern<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">            <span class="pl-c1">6</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Partial<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">            <span class="pl-c1">255</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Other<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">        LightSource <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">            <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Unknown<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">            <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Daylight<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">            <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Fluorescent<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">            <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Tungsten (incandescent light)<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">            <span class="pl-c1">4</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">            <span class="pl-c1">9</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Fine weather<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">            <span class="pl-c1">10</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Cloudy weather<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">            <span class="pl-c1">11</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Shade<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">            <span class="pl-c1">12</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Daylight fluorescent (D 5700 - 7100K)<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">            <span class="pl-c1">13</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Day white fluorescent (N 4600 - 5400K)<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">            <span class="pl-c1">14</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Cool white fluorescent (W 3900 - 4500K)<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">            <span class="pl-c1">15</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>White fluorescent (WW 3200 - 3700K)<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">            <span class="pl-c1">17</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Standard light A<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">            <span class="pl-c1">18</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Standard light B<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">            <span class="pl-c1">19</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Standard light C<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">            <span class="pl-c1">20</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>D55<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">            <span class="pl-c1">21</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>D65<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">            <span class="pl-c1">22</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>D75<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">            <span class="pl-c1">23</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>D50<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">            <span class="pl-c1">24</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ISO studio tungsten<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">            <span class="pl-c1">255</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Other<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">        Flash <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">            <span class="pl-c1">0x0000</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash did not fire<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">            <span class="pl-c1">0x0001</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">            <span class="pl-c1">0x0005</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Strobe return light not detected<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">            <span class="pl-c1">0x0007</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Strobe return light detected<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">            <span class="pl-c1">0x0009</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, compulsory flash mode<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">            <span class="pl-c1">0x000D</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, compulsory flash mode, return light not detected<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">            <span class="pl-c1">0x000F</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, compulsory flash mode, return light detected<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">            <span class="pl-c1">0x0010</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash did not fire, compulsory flash mode<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">            <span class="pl-c1">0x0018</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash did not fire, auto mode<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">            <span class="pl-c1">0x0019</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, auto mode<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">            <span class="pl-c1">0x001D</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, auto mode, return light not detected<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">            <span class="pl-c1">0x001F</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, auto mode, return light detected<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">            <span class="pl-c1">0x0020</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>No flash function<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">            <span class="pl-c1">0x0041</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, red-eye reduction mode<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">            <span class="pl-c1">0x0045</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, red-eye reduction mode, return light not detected<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">            <span class="pl-c1">0x0047</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, red-eye reduction mode, return light detected<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">            <span class="pl-c1">0x0049</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, compulsory flash mode, red-eye reduction mode<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">            <span class="pl-c1">0x004D</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">            <span class="pl-c1">0x004F</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, compulsory flash mode, red-eye reduction mode, return light detected<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">            <span class="pl-c1">0x0059</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, auto mode, red-eye reduction mode<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">            <span class="pl-c1">0x005D</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, auto mode, return light not detected, red-eye reduction mode<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">            <span class="pl-c1">0x005F</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash fired, auto mode, return light detected, red-eye reduction mode<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">        SensingMethod <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">            <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Not defined<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">            <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>One-chip color area sensor<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">            <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Two-chip color area sensor<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">            <span class="pl-c1">4</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Three-chip color area sensor<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">            <span class="pl-c1">5</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Color sequential area sensor<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">            <span class="pl-c1">7</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Trilinear sensor<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">            <span class="pl-c1">8</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Color sequential linear sensor<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">        SceneCaptureType <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">            <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Standard<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">            <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Landscape<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">            <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Portrait<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">            <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Night scene<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">        SceneType <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">            <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Directly photographed<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">        CustomRendered <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">            <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Normal process<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">            <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Custom process<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">        WhiteBalance <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">            <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Auto white balance<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line">            <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Manual white balance<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">        GainControl <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">            <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>None<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">            <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Low gain up<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">            <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>High gain up<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">            <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Low gain down<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">            <span class="pl-c1">4</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>High gain down<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">        Contrast <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">            <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Normal<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">            <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Soft<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">            <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Hard<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">        Saturation <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">            <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Normal<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">            <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Low saturation<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">            <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>High saturation<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line">        Sharpness <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line">            <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Normal<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line">            <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Soft<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line">            <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Hard<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line">        SubjectDistanceRange <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">            <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Unknown<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line">            <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Macro<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line">            <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Close view<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">            <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Distant view<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">        FileSource <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">            <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>DSC<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">        Components <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">            <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">            <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Y<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">            <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Cb<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">            <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Cr<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">            <span class="pl-c1">4</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>R<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">            <span class="pl-c1">5</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>G<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">            <span class="pl-c1">6</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>B<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">addEvent</span>(<span class="pl-vpf">element</span>, <span class="pl-vpf">event</span>, <span class="pl-vpf">handler</span>) {</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line">        <span class="pl-k">if</span> (element.addEventListener) {</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line">            element.addEventListener(<span class="pl-s3">event</span>, handler, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (element.attachEvent) {</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">            element.<span class="pl-s3">attachEvent</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>on<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s3">event</span>, handler);</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">imageHasData</span>(<span class="pl-vpf">img</span>) {</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-k">!!</span>(img.exifdata);</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">base64ToArrayBuffer</span>(<span class="pl-vpf">base64</span>, <span class="pl-vpf">contentType</span>) {</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">        contentType <span class="pl-k">=</span> contentType <span class="pl-k">||</span> base64.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>data<span class="pl-cce">\:</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\;</span>]</span><span class="pl-k">+</span>)<span class="pl-cce">\;</span>base64,<span class="pl-pds">/</span>mi</span>)[<span class="pl-c1">1</span>] <span class="pl-k">||</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>; <span class="pl-c">// e.g. &#39;data:image/jpeg;base64,...&#39; =&gt; &#39;image/jpeg&#39;</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">        base64 <span class="pl-k">=</span> base64.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>data<span class="pl-cce">\:</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\;</span>]</span><span class="pl-k">+</span>)<span class="pl-cce">\;</span>base64,<span class="pl-pds">/</span>gmi</span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">        <span class="pl-s">var</span> binary <span class="pl-k">=</span> <span class="pl-s3">atob</span>(base64);</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">        <span class="pl-s">var</span> len <span class="pl-k">=</span> binary.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">        <span class="pl-s">var</span> buffer <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">ArrayBuffer</span>(len);</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">        <span class="pl-s">var</span> view <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(buffer);</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">        <span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> len; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">            view[i] <span class="pl-k">=</span> binary.<span class="pl-s3">charCodeAt</span>(i);</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">        <span class="pl-k">return</span> buffer;</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">objectURLToBlob</span>(<span class="pl-vpf">url</span>, <span class="pl-vpf">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">        <span class="pl-s">var</span> http <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span>();</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line">        http.<span class="pl-s3">open</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>GET<span class="pl-pds">&quot;</span></span>, url, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line">        http.responseType <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>blob<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line">        <span class="pl-s3">http</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">status</span> <span class="pl-k">==</span> <span class="pl-c1">200</span> <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-sc">status</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line">                callback(<span class="pl-v">this</span>.response);</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">        http.<span class="pl-s3">send</span>();</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">getImageData</span>(<span class="pl-vpf">img</span>, <span class="pl-vpf">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">        <span class="pl-st">function</span> <span class="pl-en">handleBinaryFile</span>(<span class="pl-vpf">binFile</span>) {</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">            <span class="pl-s">var</span> data <span class="pl-k">=</span> findEXIFinJPEG(binFile);</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">            <span class="pl-s">var</span> iptcdata <span class="pl-k">=</span> findIPTCinJPEG(binFile);</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">            img.exifdata <span class="pl-k">=</span> data <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">            img.iptcdata <span class="pl-k">=</span> iptcdata <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">            <span class="pl-k">if</span> (callback) {</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">                callback.<span class="pl-s3">call</span>(img);</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code js-file-line">        <span class="pl-k">if</span> (img.<span class="pl-sc">src</span>) {</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>data<span class="pl-cce">\:</span><span class="pl-pds">/</span>i</span>.<span class="pl-s3">test</span>(img.<span class="pl-sc">src</span>)) { <span class="pl-c">// Data URI</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code js-file-line">                <span class="pl-s">var</span> arrayBuffer <span class="pl-k">=</span> base64ToArrayBuffer(img.<span class="pl-sc">src</span>);</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code js-file-line">                handleBinaryFile(arrayBuffer);</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>blob<span class="pl-cce">\:</span><span class="pl-pds">/</span>i</span>.<span class="pl-s3">test</span>(img.<span class="pl-sc">src</span>)) { <span class="pl-c">// Object URL</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code js-file-line">                <span class="pl-s">var</span> fileReader <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">FileReader</span>();</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code js-file-line">                <span class="pl-s3">fileReader</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code js-file-line">                    handleBinaryFile(e.<span class="pl-sc">target</span>.result);</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code js-file-line">                objectURLToBlob(img.<span class="pl-sc">src</span>, <span class="pl-st">function</span> (<span class="pl-vpf">blob</span>) {</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code js-file-line">                    fileReader.readAsArrayBuffer(blob);</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code js-file-line">                <span class="pl-s">var</span> http <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span>();</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code js-file-line">                <span class="pl-s3">http</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code js-file-line">                    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">status</span> <span class="pl-k">==</span> <span class="pl-c1">200</span> <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-sc">status</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code js-file-line">                        handleBinaryFile(http.response);</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code js-file-line">                    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code js-file-line">                        <span class="pl-k">throw</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Could not load image<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code js-file-line">                    http <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code js-file-line">                http.<span class="pl-s3">open</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>GET<span class="pl-pds">&quot;</span></span>, img.<span class="pl-sc">src</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code js-file-line">                http.responseType <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>arraybuffer<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code js-file-line">                http.<span class="pl-s3">send</span>(<span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-s3">window</span>.FileReader <span class="pl-k">&amp;&amp;</span> (img <span class="pl-k">instanceof</span> <span class="pl-s3">window</span>.Blob <span class="pl-k">||</span> img <span class="pl-k">instanceof</span> <span class="pl-s3">window</span>.File)) {</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code js-file-line">            <span class="pl-s">var</span> fileReader <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">FileReader</span>();</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code js-file-line">            <span class="pl-s3">fileReader</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code js-file-line">                <span class="pl-k">if</span> (debug) <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Got file of length <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> e.<span class="pl-sc">target</span>.result.byteLength);</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code js-file-line">                handleBinaryFile(e.<span class="pl-sc">target</span>.result);</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code js-file-line">            fileReader.readAsArrayBuffer(img);</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">findEXIFinJPEG</span>(<span class="pl-vpf">file</span>) {</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code js-file-line">        <span class="pl-s">var</span> dataView <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DataView</span>(file);</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code js-file-line">        <span class="pl-k">if</span> (debug) <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Got file of length <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> file.byteLength);</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code js-file-line">        <span class="pl-k">if</span> ((dataView.getUint8(<span class="pl-c1">0</span>) <span class="pl-k">!=</span> <span class="pl-c1">0xFF</span>) <span class="pl-k">||</span> (dataView.getUint8(<span class="pl-c1">1</span>) <span class="pl-k">!=</span> <span class="pl-c1">0xD8</span>)) {</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code js-file-line">            <span class="pl-k">if</span> (debug) <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Not a valid JPEG<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>; <span class="pl-c">// not a valid jpeg</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code js-file-line">        <span class="pl-s">var</span> offset <span class="pl-k">=</span> <span class="pl-c1">2</span>,</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code js-file-line">            length <span class="pl-k">=</span> file.byteLength,</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code js-file-line">            marker;</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code js-file-line">        <span class="pl-k">while</span> (offset <span class="pl-k">&lt;</span> length) {</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code js-file-line">            <span class="pl-k">if</span> (dataView.getUint8(offset) <span class="pl-k">!=</span> <span class="pl-c1">0xFF</span>) {</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code js-file-line">                <span class="pl-k">if</span> (debug) <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Not a valid marker at offset <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> offset <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>, found: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> dataView.getUint8(offset));</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">false</span>; <span class="pl-c">// not a valid marker, something is wrong</span></td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code js-file-line">            marker <span class="pl-k">=</span> dataView.getUint8(offset <span class="pl-k">+</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code js-file-line">            <span class="pl-k">if</span> (debug) <span class="pl-en">console</span><span class="pl-s3">.log</span>(marker);</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code js-file-line">            <span class="pl-c">// we could implement handling for other markers here,</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code js-file-line">            <span class="pl-c">// but we&#39;re only looking for 0xFFE1 for EXIF data</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code js-file-line">            <span class="pl-k">if</span> (marker <span class="pl-k">==</span> <span class="pl-c1">225</span>) {</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code js-file-line">                <span class="pl-k">if</span> (debug) <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Found 0xFFE1 marker<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code js-file-line">                <span class="pl-k">return</span> readEXIFData(dataView, offset <span class="pl-k">+</span> <span class="pl-c1">4</span>, dataView.getUint16(offset <span class="pl-k">+</span> <span class="pl-c1">2</span>) <span class="pl-k">-</span> <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code js-file-line">                <span class="pl-c">// offset += 2 + file.getShortAt(offset+2, true);</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code js-file-line">                offset <span class="pl-k">+=</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> dataView.getUint16(offset<span class="pl-k">+</span><span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">findIPTCinJPEG</span>(<span class="pl-vpf">file</span>) {</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code js-file-line">        <span class="pl-s">var</span> dataView <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DataView</span>(file);</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code js-file-line">        <span class="pl-k">if</span> (debug) <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Got file of length <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> file.byteLength);</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code js-file-line">        <span class="pl-k">if</span> ((dataView.getUint8(<span class="pl-c1">0</span>) <span class="pl-k">!=</span> <span class="pl-c1">0xFF</span>) <span class="pl-k">||</span> (dataView.getUint8(<span class="pl-c1">1</span>) <span class="pl-k">!=</span> <span class="pl-c1">0xD8</span>)) {</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code js-file-line">            <span class="pl-k">if</span> (debug) <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Not a valid JPEG<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>; <span class="pl-c">// not a valid jpeg</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code js-file-line">        <span class="pl-s">var</span> offset <span class="pl-k">=</span> <span class="pl-c1">2</span>,</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code js-file-line">            length <span class="pl-k">=</span> file.byteLength;</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code js-file-line">        <span class="pl-s">var</span> <span class="pl-en">isFieldSegmentStart</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">dataView</span>, <span class="pl-vpf">offset</span>){</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code js-file-line">            <span class="pl-k">return</span> (</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code js-file-line">                dataView.getUint8(offset) <span class="pl-k">===</span> <span class="pl-c1">0x38</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code js-file-line">                dataView.getUint8(offset<span class="pl-k">+</span><span class="pl-c1">1</span>) <span class="pl-k">===</span> <span class="pl-c1">0x42</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code js-file-line">                dataView.getUint8(offset<span class="pl-k">+</span><span class="pl-c1">2</span>) <span class="pl-k">===</span> <span class="pl-c1">0x49</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code js-file-line">                dataView.getUint8(offset<span class="pl-k">+</span><span class="pl-c1">3</span>) <span class="pl-k">===</span> <span class="pl-c1">0x4D</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code js-file-line">                dataView.getUint8(offset<span class="pl-k">+</span><span class="pl-c1">4</span>) <span class="pl-k">===</span> <span class="pl-c1">0x04</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code js-file-line">                dataView.getUint8(offset<span class="pl-k">+</span><span class="pl-c1">5</span>) <span class="pl-k">===</span> <span class="pl-c1">0x04</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code js-file-line">            );</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code js-file-line">        <span class="pl-k">while</span> (offset <span class="pl-k">&lt;</span> length) {</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code js-file-line">            <span class="pl-k">if</span> ( isFieldSegmentStart(dataView, offset )){</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code js-file-line">                <span class="pl-c">// Get the length of the name header (which is padded to an even number of bytes)</span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code js-file-line">                <span class="pl-s">var</span> nameHeaderLength <span class="pl-k">=</span> dataView.getUint8(offset<span class="pl-k">+</span><span class="pl-c1">7</span>);</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code js-file-line">                <span class="pl-k">if</span>(nameHeaderLength <span class="pl-k">%</span> <span class="pl-c1">2</span> <span class="pl-k">!==</span> <span class="pl-c1">0</span>) nameHeaderLength <span class="pl-k">+=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code js-file-line">                <span class="pl-c">// Check for pre photoshop 6 format</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code js-file-line">                <span class="pl-k">if</span>(nameHeaderLength <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code js-file-line">                    <span class="pl-c">// Always 4</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code js-file-line">                    nameHeaderLength <span class="pl-k">=</span> <span class="pl-c1">4</span>;</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code js-file-line">                <span class="pl-s">var</span> startOffset <span class="pl-k">=</span> offset <span class="pl-k">+</span> <span class="pl-c1">8</span> <span class="pl-k">+</span> nameHeaderLength;</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code js-file-line">                <span class="pl-s">var</span> sectionLength <span class="pl-k">=</span> dataView.getUint16(offset <span class="pl-k">+</span> <span class="pl-c1">6</span> <span class="pl-k">+</span> nameHeaderLength);</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code js-file-line">                <span class="pl-k">return</span> readIPTCData(file, startOffset, sectionLength);</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code js-file-line">            <span class="pl-c">// Not the marker, continue searching</span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code js-file-line">            offset<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code js-file-line">    <span class="pl-s">var</span> IptcFieldMap <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code js-file-line">        <span class="pl-c1">0x78</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>caption<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code js-file-line">        <span class="pl-c1">0x6E</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>credit<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code js-file-line">        <span class="pl-c1">0x19</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>keywords<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code js-file-line">        <span class="pl-c1">0x37</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>dateCreated<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code js-file-line">        <span class="pl-c1">0x50</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>byline<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code js-file-line">        <span class="pl-c1">0x55</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>bylineTitle<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code js-file-line">        <span class="pl-c1">0x7A</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>captionWriter<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code js-file-line">        <span class="pl-c1">0x69</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>headline<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code js-file-line">        <span class="pl-c1">0x74</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>copyright<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code js-file-line">        <span class="pl-c1">0x0F</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>category<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">readIPTCData</span>(<span class="pl-vpf">file</span>, <span class="pl-vpf">startOffset</span>, <span class="pl-vpf">sectionLength</span>){</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code js-file-line">        <span class="pl-s">var</span> dataView <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DataView</span>(file);</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code js-file-line">        <span class="pl-s">var</span> data <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code js-file-line">        <span class="pl-s">var</span> fieldValue, fieldName, dataSize, segmentType, segmentSize;</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code js-file-line">        <span class="pl-s">var</span> segmentStartPos <span class="pl-k">=</span> startOffset;</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code js-file-line">        <span class="pl-k">while</span>(segmentStartPos <span class="pl-k">&lt;</span> startOffset<span class="pl-k">+</span>sectionLength) {</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code js-file-line">            <span class="pl-k">if</span>(dataView.getUint8(segmentStartPos) <span class="pl-k">===</span> <span class="pl-c1">0x1C</span> <span class="pl-k">&amp;&amp;</span> dataView.getUint8(segmentStartPos<span class="pl-k">+</span><span class="pl-c1">1</span>) <span class="pl-k">===</span> <span class="pl-c1">0x02</span>){</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code js-file-line">                segmentType <span class="pl-k">=</span> dataView.getUint8(segmentStartPos<span class="pl-k">+</span><span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code js-file-line">                <span class="pl-k">if</span>(segmentType <span class="pl-k">in</span> IptcFieldMap) {</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code js-file-line">                    dataSize <span class="pl-k">=</span> dataView.getInt16(segmentStartPos<span class="pl-k">+</span><span class="pl-c1">3</span>);</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code js-file-line">                    segmentSize <span class="pl-k">=</span> dataSize <span class="pl-k">+</span> <span class="pl-c1">5</span>;</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code js-file-line">                    fieldName <span class="pl-k">=</span> IptcFieldMap[segmentType];</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code js-file-line">                    fieldValue <span class="pl-k">=</span> getStringFromDB(dataView, segmentStartPos<span class="pl-k">+</span><span class="pl-c1">5</span>, dataSize);</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code js-file-line">                    <span class="pl-c">// Check if we already stored a value with this name</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code js-file-line">                    <span class="pl-k">if</span>(data.hasOwnProperty(fieldName)) {</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code js-file-line">                        <span class="pl-c">// Value already stored with this name, create multivalue field</span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code js-file-line">                        <span class="pl-k">if</span>(data[fieldName] <span class="pl-k">instanceof</span> <span class="pl-s3">Array</span>) {</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code js-file-line">                            data[fieldName].<span class="pl-s3">push</span>(fieldValue);</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code js-file-line">                        <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code js-file-line">                            data[fieldName] <span class="pl-k">=</span> [data[fieldName], fieldValue];</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code js-file-line">                    <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code js-file-line">                        data[fieldName] <span class="pl-k">=</span> fieldValue;</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code js-file-line">            segmentStartPos<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code js-file-line">        <span class="pl-k">return</span> data;</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">readTags</span>(<span class="pl-vpf">file</span>, <span class="pl-vpf">tiffStart</span>, <span class="pl-vpf">dirStart</span>, <span class="pl-vpf">strings</span>, <span class="pl-vpf">bigEnd</span>) {</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code js-file-line">        <span class="pl-s">var</span> entries <span class="pl-k">=</span> file.getUint16(dirStart, <span class="pl-k">!</span>bigEnd),</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code js-file-line">            tags <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code js-file-line">            entryOffset, tag,</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code js-file-line">            i;</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code js-file-line">        <span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>entries;i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code js-file-line">            entryOffset <span class="pl-k">=</span> dirStart <span class="pl-k">+</span> i<span class="pl-k">*</span><span class="pl-c1">12</span> <span class="pl-k">+</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code js-file-line">            tag <span class="pl-k">=</span> strings[file.getUint16(entryOffset, <span class="pl-k">!</span>bigEnd)];</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>tag <span class="pl-k">&amp;&amp;</span> debug) <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Unknown tag: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> file.getUint16(entryOffset, <span class="pl-k">!</span>bigEnd));</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code js-file-line">            tags[tag] <span class="pl-k">=</span> readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code js-file-line">        <span class="pl-k">return</span> tags;</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">readTagValue</span>(<span class="pl-vpf">file</span>, <span class="pl-vpf">entryOffset</span>, <span class="pl-vpf">tiffStart</span>, <span class="pl-vpf">dirStart</span>, <span class="pl-vpf">bigEnd</span>) {</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code js-file-line">        <span class="pl-s">var</span> type <span class="pl-k">=</span> file.getUint16(entryOffset<span class="pl-k">+</span><span class="pl-c1">2</span>, <span class="pl-k">!</span>bigEnd),</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code js-file-line">            numValues <span class="pl-k">=</span> file.getUint32(entryOffset<span class="pl-k">+</span><span class="pl-c1">4</span>, <span class="pl-k">!</span>bigEnd),</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code js-file-line">            valueOffset <span class="pl-k">=</span> file.getUint32(entryOffset<span class="pl-k">+</span><span class="pl-c1">8</span>, <span class="pl-k">!</span>bigEnd) <span class="pl-k">+</span> tiffStart,</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code js-file-line">            offset,</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code js-file-line">            vals, val, n,</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code js-file-line">            numerator, denominator;</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code js-file-line">        <span class="pl-k">switch</span> (type) {</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-c">// byte, 8-bit unsigned int</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-c">// undefined, 8-bit byte, value depending on field</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code js-file-line">                <span class="pl-k">if</span> (numValues <span class="pl-k">==</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code js-file-line">                    <span class="pl-k">return</span> file.getUint8(entryOffset <span class="pl-k">+</span> <span class="pl-c1">8</span>, <span class="pl-k">!</span>bigEnd);</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code js-file-line">                    offset <span class="pl-k">=</span> numValues <span class="pl-k">&gt;</span> <span class="pl-c1">4</span> <span class="pl-k">?</span> valueOffset <span class="pl-k">:</span> (entryOffset <span class="pl-k">+</span> <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code js-file-line">                    vals <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code js-file-line">                    <span class="pl-k">for</span> (n<span class="pl-k">=</span><span class="pl-c1">0</span>;n<span class="pl-k">&lt;</span>numValues;n<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code js-file-line">                        vals[n] <span class="pl-k">=</span> file.getUint8(offset <span class="pl-k">+</span> n);</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code js-file-line">                    <span class="pl-k">return</span> vals;</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-c">// ascii, 8-bit byte</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code js-file-line">                offset <span class="pl-k">=</span> numValues <span class="pl-k">&gt;</span> <span class="pl-c1">4</span> <span class="pl-k">?</span> valueOffset <span class="pl-k">:</span> (entryOffset <span class="pl-k">+</span> <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code js-file-line">                <span class="pl-k">return</span> getStringFromDB(file, offset, numValues<span class="pl-k">-</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-c">// short, 16 bit int</span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code js-file-line">                <span class="pl-k">if</span> (numValues <span class="pl-k">==</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code js-file-line">                    <span class="pl-k">return</span> file.getUint16(entryOffset <span class="pl-k">+</span> <span class="pl-c1">8</span>, <span class="pl-k">!</span>bigEnd);</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code js-file-line">                    offset <span class="pl-k">=</span> numValues <span class="pl-k">&gt;</span> <span class="pl-c1">2</span> <span class="pl-k">?</span> valueOffset <span class="pl-k">:</span> (entryOffset <span class="pl-k">+</span> <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code js-file-line">                    vals <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code js-file-line">                    <span class="pl-k">for</span> (n<span class="pl-k">=</span><span class="pl-c1">0</span>;n<span class="pl-k">&lt;</span>numValues;n<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code js-file-line">                        vals[n] <span class="pl-k">=</span> file.getUint16(offset <span class="pl-k">+</span> <span class="pl-c1">2</span><span class="pl-k">*</span>n, <span class="pl-k">!</span>bigEnd);</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code js-file-line">                    <span class="pl-k">return</span> vals;</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-c">// long, 32 bit int</span></td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code js-file-line">                <span class="pl-k">if</span> (numValues <span class="pl-k">==</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code js-file-line">                    <span class="pl-k">return</span> file.getUint32(entryOffset <span class="pl-k">+</span> <span class="pl-c1">8</span>, <span class="pl-k">!</span>bigEnd);</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code js-file-line">                    vals <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code js-file-line">                    <span class="pl-k">for</span> (n<span class="pl-k">=</span><span class="pl-c1">0</span>;n<span class="pl-k">&lt;</span>numValues;n<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code js-file-line">                        vals[n] <span class="pl-k">=</span> file.getUint32(valueOffset <span class="pl-k">+</span> <span class="pl-c1">4</span><span class="pl-k">*</span>n, <span class="pl-k">!</span>bigEnd);</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code js-file-line">                    <span class="pl-k">return</span> vals;</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">5</span><span class="pl-k">:</span>    <span class="pl-c">// rational = two long values, first is numerator, second is denominator</span></td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code js-file-line">                <span class="pl-k">if</span> (numValues <span class="pl-k">==</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code js-file-line">                    numerator <span class="pl-k">=</span> file.getUint32(valueOffset, <span class="pl-k">!</span>bigEnd);</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code js-file-line">                    denominator <span class="pl-k">=</span> file.getUint32(valueOffset<span class="pl-k">+</span><span class="pl-c1">4</span>, <span class="pl-k">!</span>bigEnd);</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code js-file-line">                    val <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Number</span>(numerator / denominator);</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code js-file-line">                    val.numerator <span class="pl-k">=</span> numerator;</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code js-file-line">                    val.denominator <span class="pl-k">=</span> denominator;</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code js-file-line">                    <span class="pl-k">return</span> val;</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code js-file-line">                    vals <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code js-file-line">                    <span class="pl-k">for</span> (n<span class="pl-k">=</span><span class="pl-c1">0</span>;n<span class="pl-k">&lt;</span>numValues;n<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code js-file-line">                        numerator <span class="pl-k">=</span> file.getUint32(valueOffset <span class="pl-k">+</span> <span class="pl-c1">8</span><span class="pl-k">*</span>n, <span class="pl-k">!</span>bigEnd);</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code js-file-line">                        denominator <span class="pl-k">=</span> file.getUint32(valueOffset<span class="pl-k">+</span><span class="pl-c1">4</span> <span class="pl-k">+</span> <span class="pl-c1">8</span><span class="pl-k">*</span>n, <span class="pl-k">!</span>bigEnd);</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code js-file-line">                        vals[n] <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Number</span>(numerator / denominator);</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code js-file-line">                        vals[n].numerator <span class="pl-k">=</span> numerator;</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code js-file-line">                        vals[n].denominator <span class="pl-k">=</span> denominator;</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code js-file-line">                    <span class="pl-k">return</span> vals;</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">9</span><span class="pl-k">:</span> <span class="pl-c">// slong, 32 bit signed int</span></td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code js-file-line">                <span class="pl-k">if</span> (numValues <span class="pl-k">==</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code js-file-line">                    <span class="pl-k">return</span> file.getInt32(entryOffset <span class="pl-k">+</span> <span class="pl-c1">8</span>, <span class="pl-k">!</span>bigEnd);</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code js-file-line">                    vals <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code js-file-line">                    <span class="pl-k">for</span> (n<span class="pl-k">=</span><span class="pl-c1">0</span>;n<span class="pl-k">&lt;</span>numValues;n<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code js-file-line">                        vals[n] <span class="pl-k">=</span> file.getInt32(valueOffset <span class="pl-k">+</span> <span class="pl-c1">4</span><span class="pl-k">*</span>n, <span class="pl-k">!</span>bigEnd);</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code js-file-line">                    <span class="pl-k">return</span> vals;</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">10</span><span class="pl-k">:</span> <span class="pl-c">// signed rational, two slongs, first is numerator, second is denominator</span></td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code js-file-line">                <span class="pl-k">if</span> (numValues <span class="pl-k">==</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code js-file-line">                    <span class="pl-k">return</span> file.getInt32(valueOffset, <span class="pl-k">!</span>bigEnd) / file.getInt32(valueOffset<span class="pl-k">+</span><span class="pl-c1">4</span>, <span class="pl-k">!</span>bigEnd);</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code js-file-line">                    vals <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code js-file-line">                    <span class="pl-k">for</span> (n<span class="pl-k">=</span><span class="pl-c1">0</span>;n<span class="pl-k">&lt;</span>numValues;n<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code js-file-line">                        vals[n] <span class="pl-k">=</span> file.getInt32(valueOffset <span class="pl-k">+</span> <span class="pl-c1">8</span><span class="pl-k">*</span>n, <span class="pl-k">!</span>bigEnd) / file.getInt32(valueOffset<span class="pl-k">+</span><span class="pl-c1">4</span> <span class="pl-k">+</span> <span class="pl-c1">8</span><span class="pl-k">*</span>n, <span class="pl-k">!</span>bigEnd);</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code js-file-line">                    <span class="pl-k">return</span> vals;</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">getStringFromDB</span>(<span class="pl-vpf">buffer</span>, <span class="pl-vpf">start</span>, <span class="pl-vpf">length</span>) {</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code js-file-line">        <span class="pl-s">var</span> outstr <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code js-file-line">        <span class="pl-k">for</span> (n <span class="pl-k">=</span> start; n <span class="pl-k">&lt;</span> start<span class="pl-k">+</span>length; n<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code js-file-line">            outstr <span class="pl-k">+=</span> <span class="pl-s3">String</span>.<span class="pl-s3">fromCharCode</span>(buffer.getUint8(n));</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code js-file-line">        <span class="pl-k">return</span> outstr;</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">readEXIFData</span>(<span class="pl-vpf">file</span>, <span class="pl-vpf">start</span>) {</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code js-file-line">        <span class="pl-k">if</span> (getStringFromDB(file, start, <span class="pl-c1">4</span>) <span class="pl-k">!=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Exif<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code js-file-line">            <span class="pl-k">if</span> (debug) <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Not valid EXIF data! <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> getStringFromDB(file, start, <span class="pl-c1">4</span>));</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code js-file-line">        <span class="pl-s">var</span> bigEnd,</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code js-file-line">            tags, tag,</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code js-file-line">            exifData, gpsData,</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code js-file-line">            tiffOffset <span class="pl-k">=</span> start <span class="pl-k">+</span> <span class="pl-c1">6</span>;</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code js-file-line">        <span class="pl-c">// test for TIFF validity and endianness</span></td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code js-file-line">        <span class="pl-k">if</span> (file.getUint16(tiffOffset) <span class="pl-k">==</span> <span class="pl-c1">0x4949</span>) {</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code js-file-line">            bigEnd <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (file.getUint16(tiffOffset) <span class="pl-k">==</span> <span class="pl-c1">0x4D4D</span>) {</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code js-file-line">            bigEnd <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code js-file-line">            <span class="pl-k">if</span> (debug) <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Not valid TIFF data! (no 0x4949 or 0x4D4D)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code js-file-line">        <span class="pl-k">if</span> (file.getUint16(tiffOffset<span class="pl-k">+</span><span class="pl-c1">2</span>, <span class="pl-k">!</span>bigEnd) <span class="pl-k">!=</span> <span class="pl-c1">0x002A</span>) {</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code js-file-line">            <span class="pl-k">if</span> (debug) <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Not valid TIFF data! (no 0x002A)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code js-file-line">        <span class="pl-s">var</span> firstIFDOffset <span class="pl-k">=</span> file.getUint32(tiffOffset<span class="pl-k">+</span><span class="pl-c1">4</span>, <span class="pl-k">!</span>bigEnd);</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code js-file-line">        <span class="pl-k">if</span> (firstIFDOffset <span class="pl-k">&lt;</span> <span class="pl-c1">0x00000008</span>) {</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code js-file-line">            <span class="pl-k">if</span> (debug) <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Not valid TIFF data! (First offset less than 8)<span class="pl-pds">&quot;</span></span>, file.getUint32(tiffOffset<span class="pl-k">+</span><span class="pl-c1">4</span>, <span class="pl-k">!</span>bigEnd));</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code js-file-line">        tags <span class="pl-k">=</span> readTags(file, tiffOffset, tiffOffset <span class="pl-k">+</span> firstIFDOffset, TiffTags, bigEnd);</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code js-file-line">        <span class="pl-k">if</span> (tags.ExifIFDPointer) {</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code js-file-line">            exifData <span class="pl-k">=</span> readTags(file, tiffOffset, tiffOffset <span class="pl-k">+</span> tags.ExifIFDPointer, ExifTags, bigEnd);</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code js-file-line">            <span class="pl-k">for</span> (tag <span class="pl-k">in</span> exifData) {</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code js-file-line">                <span class="pl-k">switch</span> (tag) {</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>LightSource<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Flash<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>MeteringMode<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ExposureProgram<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SensingMethod<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SceneCaptureType<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SceneType<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>CustomRendered<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>WhiteBalance<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GainControl<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Contrast<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Saturation<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Sharpness<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SubjectDistanceRange<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>FileSource<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code js-file-line">                        exifData[tag] <span class="pl-k">=</span> StringValues[tag][exifData[tag]];</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code js-file-line">                        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ExifVersion<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>FlashpixVersion<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code js-file-line">                        exifData[tag] <span class="pl-k">=</span> <span class="pl-s3">String</span>.<span class="pl-s3">fromCharCode</span>(exifData[tag][<span class="pl-c1">0</span>], exifData[tag][<span class="pl-c1">1</span>], exifData[tag][<span class="pl-c1">2</span>], exifData[tag][<span class="pl-c1">3</span>]);</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code js-file-line">                        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ComponentsConfiguration<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code js-file-line">                        exifData[tag] <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code js-file-line">                            StringValues.Components[exifData[tag][<span class="pl-c1">0</span>]] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code js-file-line">                            StringValues.Components[exifData[tag][<span class="pl-c1">1</span>]] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code js-file-line">                            StringValues.Components[exifData[tag][<span class="pl-c1">2</span>]] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code js-file-line">                            StringValues.Components[exifData[tag][<span class="pl-c1">3</span>]];</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code js-file-line">                        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code js-file-line">                tags[tag] <span class="pl-k">=</span> exifData[tag];</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code js-file-line">        <span class="pl-k">if</span> (tags.GPSInfoIFDPointer) {</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code js-file-line">            gpsData <span class="pl-k">=</span> readTags(file, tiffOffset, tiffOffset <span class="pl-k">+</span> tags.GPSInfoIFDPointer, GPSTags, bigEnd);</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code js-file-line">            <span class="pl-k">for</span> (tag <span class="pl-k">in</span> gpsData) {</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code js-file-line">                <span class="pl-k">switch</span> (tag) {</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code js-file-line">                    <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GPSVersionID<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code js-file-line">                        gpsData[tag] <span class="pl-k">=</span> gpsData[tag][<span class="pl-c1">0</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code js-file-line">                            <span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> gpsData[tag][<span class="pl-c1">1</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code js-file-line">                            <span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> gpsData[tag][<span class="pl-c1">2</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code js-file-line">                            <span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> gpsData[tag][<span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code js-file-line">                        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code js-file-line">                tags[tag] <span class="pl-k">=</span> gpsData[tag];</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code js-file-line">        <span class="pl-k">return</span> tags;</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code js-file-line">    <span class="pl-s3">EXIF</span>.<span class="pl-en">getData</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">img</span>, <span class="pl-vpf">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code js-file-line">        <span class="pl-k">if</span> ((img <span class="pl-k">instanceof</span> <span class="pl-s3">Image</span> <span class="pl-k">||</span> img <span class="pl-k">instanceof</span> HTMLImageElement) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>img.<span class="pl-sc">complete</span>) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>imageHasData(img)) {</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code js-file-line">            getImageData(img, callback);</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code js-file-line">            <span class="pl-k">if</span> (callback) {</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code js-file-line">                callback.<span class="pl-s3">call</span>(img);</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code js-file-line">    <span class="pl-s3">EXIF</span>.<span class="pl-en">getTag</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">img</span>, <span class="pl-vpf">tag</span>) {</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>imageHasData(img)) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code js-file-line">        <span class="pl-k">return</span> img.exifdata[tag];</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code js-file-line">    <span class="pl-s3">EXIF</span>.<span class="pl-en">getAllTags</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">img</span>) {</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>imageHasData(img)) <span class="pl-k">return</span> {};</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code js-file-line">        <span class="pl-s">var</span> a,</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code js-file-line">            data <span class="pl-k">=</span> img.exifdata,</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code js-file-line">            tags <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code js-file-line">        <span class="pl-k">for</span> (a <span class="pl-k">in</span> data) {</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code js-file-line">            <span class="pl-k">if</span> (data.hasOwnProperty(a)) {</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code js-file-line">                tags[a] <span class="pl-k">=</span> data[a];</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code js-file-line">        <span class="pl-k">return</span> tags;</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code js-file-line">    <span class="pl-s3">EXIF</span>.<span class="pl-en">pretty</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">img</span>) {</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>imageHasData(img)) <span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code js-file-line">        <span class="pl-s">var</span> a,</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code js-file-line">            data <span class="pl-k">=</span> img.exifdata,</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code js-file-line">            strPretty <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code js-file-line">        <span class="pl-k">for</span> (a <span class="pl-k">in</span> data) {</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code js-file-line">            <span class="pl-k">if</span> (data.hasOwnProperty(a)) {</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">typeof</span> data[a] <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code js-file-line">                    <span class="pl-k">if</span> (data[a] <span class="pl-k">instanceof</span> <span class="pl-s3">Number</span>) {</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code js-file-line">                        strPretty <span class="pl-k">+=</span> a <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> : <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> data[a] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> [<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> data[a].numerator <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> data[a].denominator <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>]<span class="pl-cce">\r\n</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code js-file-line">                    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code js-file-line">                        strPretty <span class="pl-k">+=</span> a <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> : [<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> data[a].<span class="pl-sc">length</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> values]<span class="pl-cce">\r\n</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code js-file-line">                    strPretty <span class="pl-k">+=</span> a <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> : <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> data[a] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\r\n</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code js-file-line">        <span class="pl-k">return</span> strPretty;</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code js-file-line">    <span class="pl-s3">EXIF</span>.<span class="pl-en">readFromBinaryFile</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">file</span>) {</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code js-file-line">        <span class="pl-k">return</span> findEXIFinJPEG(file);</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> define <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> define.amd) {</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code js-file-line">        define(<span class="pl-s1"><span class="pl-pds">&#39;</span>exif-js<span class="pl-pds">&#39;</span></span>, [], <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code js-file-line">            <span class="pl-k">return</span> EXIF;</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code js-file-line">}.<span class="pl-s3">call</span>(<span class="pl-v">this</span>));</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code js-file-line">
</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.07388s from github-fe126-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2d727fed4d969b14b28165c75ad12d7dddd56c0198fa70cedc3fdad7ac395b2c.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-f82405eac9208116886d504ad90a85513ea8de114d676a6cf7f35aaa497cb974.js" type="text/javascript"></script>
      
      
  </body>
</html>

