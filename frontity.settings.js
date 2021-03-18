const settings = {
  "name": "johncdraws-frontity-portfolio",
  "state": {
    "frontity": {
      "url": "https://johncdraws.com",
      "title": "John Chung",
      "description": "ANIMATOR • ILLUSTRATOR • CHARACTER DESIGNER"
    }
  },
  "packages": [
    {
      "name": "@awsmin/f1",
      "state": {
        "theme": {
          "menu": [
            ["Portfolio", "/portfolio/"],
            ["Personal", "/personal/"],
            ["About", "/"]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "hover"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://admin.johncdraws.com/wp-json",
          "homepage": "/about/",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
