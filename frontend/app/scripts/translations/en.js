'use strict';

angular
   .module('frontendApp')
   .config(function($translateProvider) {
      $translateProvider
         .translations('en', {
            ON: "on",
            SLOGAN: "Extend GLPI with Plugins",
            TRENDING: "Trending",
            TRENDING_SUB: "Popular this month",
            NEW: "New",
            NEW_SUB: "Most recent in the catalog",
            POPULAR: "Popular",
            POPULAR_SUB: "With the most unique installs",
            UPDATED: "Updated",
            UPDATED_SUB: "Recently updated plugins",
            TAGS: "Tags",
            TAGS_SUB: "With the highest number of plugin",
            AUTHORS: "Authors",
            AUTHORS_SUB: "With the highest number of contributions",
            NAV_FEATURED: "Featured",
            NAV_ALLPLUGINS: "All plugins",
            NAV_SEARCH: "Search",
            NAV_SUBMIT_A_PLUGIN: "Submit a plugin",
            NAV_CONTACT: "Contact",
            SEARCHBAR_PLACEHOLDER: "Search",
            VERSION: "Version",
            COMPATIBLE_WITH: "Compatible with",
            HOMEPAGE: "Homepage",
            ADDED: "Added",
            BY: "By",
            CONTRIBUTED_TO: "contributed to",
            PLUGIN_CONTRIBUTED_TO: "contributed to/worked on those plugins",
            TAGGED_WITH: "tagged on",
            PLUGIN_TAGGED_WITH: "Plugins tagged with",
            QUESTION_SUGGESTION_PROBLEM: "Any question, suggestion, problem ?",
            PLEASE_SEND_US_A_MESSAGE: "Please, send us a message.",
            PLEASE_USE_SUGGESTION_TRACKER: "If your message is a feature request for the GLPI software, you are strongly encouraged to use our suggestion tracker at",
            FIRSTNAME: "First name",
            LASTNAME: "Last name",
            EMAIL: "Email",
            SUBJECT: "Subject",
            YOUR_MESSAGE: "Your message",
            SUBMIT: "Submit",
            SUBMIT_YOUR_PLUGIN: "Submit your plugin!",
            SUB_SUBMIT_YOUR_PLUGIN: "Please, provide the url describing your plugin.",
            GLPI_PLUGIN_CREATORS: "GLPI Plugin Creators",
            PAGINATION_RESULTS: "Results",
            PAGINATION_TO: "to",
            PAGINATION_ON: "over",
            PAGINATION_ELEMENTS: "elements",
            NEVER_UPDATED: "never updated since first publication"
         });
   });
