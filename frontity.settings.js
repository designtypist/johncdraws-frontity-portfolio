const settings = {
  "name": "johncdraws-awsm-project",
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
            [
              "Portfolio",
              "/portfolio/"
            ],
            [
              "Personal",
              "/personal/"
            ],
            [
              "About",
              "/about/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://admin.johncdraws.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
