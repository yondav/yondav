# yondav

[![Website Badge](https://img.shields.io/badge/-yondav-c14438?style=flat-square&l&link=https://www.yondav.us&color=323235)](https://www.yondav.us)
[![Linkedin Badge](https://img.shields.io/badge/-Yoni%20David-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/yondav)](https://www.linkedin.com/in/yondav)
[![Gmail Badge](https://img.shields.io/badge/-yoni@yondav.us-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:yoni@yondav.us)](mailto:yoni@yondav.us)
[![Resume Badge](https://img.shields.io/badge/-Resume-c14438?style=flat-square&l&link=https://cdn.sanity.io/files/0gd4yjy9/production/2a8d0b7f87273abeac08e2f92b926d83b1322349.pdf&color=323235)](https://cdn.sanity.io/files/0gd4yjy9/production/2a8d0b7f87273abeac08e2f92b926d83b1322349.pdf)

![yondav](https://cdn.sanity.io/images/0gd4yjy9/production/adb7ee0ec99092b1a5decc50e634b8a6a448b9e5-2400x1260.png)

## Who am I?

```python
  class YonDav:
    family_name = 'David'
    given_name = 'Jonathan'
    nick_name = 'Yoni'
    brand_name = 'yondav'

    location = 'New York City'

    profession = 'Software Engineer'
    employer = {
        'name': 'Kinetic IQ',
        'web': 'https://www.kineticiq.com/'
    }

    technologies = [
        'JavaScript',
        'TypeScript',
        'Python',
        'Bash',
        'Git',
        'Rust',
        'Solidity',
        'AWS',
        'ReactJS',
        'NextJS',
        'Gatsby',
        'CSS',
        'TailwindCSS',
        'NodeJS',
        'ExpressJS',
        'NestJS',
        'Prisma',
        'MongoDB',
        'MySQL',
        'PostgreSQL'
    ]

    interests = ['Audio Engineering', 'Percussion', 'Baseball', 'Cooking', 'Travel']

    def format_interests(self):
        formatted_interests = ""
        for interest in self.interests:
            formatted_interests += f"- {interest}\n"
        return formatted_interests

    def introduction(self):
        interests_list = self.format_interests()
        return f"Hello, I'm {self.given_name} {self.family_name} but you can call me {self.nick_name} or drop the extra syllables and call me {self.brand_name}.\n\nI'm currently living in {self.location} working as a {self.profession} at [{self.employer['name']}]({self.employer['web']}). \n\nOutside of programming, my primary interests are\n{interests_list}"

    def tech_icons(self):
        icons_markdown_list = []
        for tech in self.technologies:
            icon_file_name = tech.lower() + '.svg'
            icon_path = os.path.join('./readme-assets/icons', icon_file_name)
            icon_markdown = f"<img src='{icon_path}' width='50' style="margin:0 8px;" alt='{tech}'>"
            icons_markdown_list.append(icon_markdown)
        return " ".join(icons_markdown_list)
```

```python
  yondav = YonDav()
```

## yondav.introduction()

Hello, I'm Jonathan David but you can call me Yoni or drop the extra syllables and call me yondav.

I'm currently living in New York City and working as a Software Engineer at [Kinetic IQ](https://www.kineticiq.com/).

Outside of programming, my primary interests are

- Audio Engineering
- Percussion
- Baseball
- Cooking
- Travel

## yondav.tech_icons()

<img src='./readme-assets/icons/javascript.svg' width='50' style="margin:0 8px;" alt='JavaScript'><img src='./readme-assets/icons/typescript.svg' width='50' style="margin:0 8px;" alt='TypeScript'><img src='./readme-assets/icons/python.svg' width='50' style="margin:0 8px;" alt='Python'> <img src='./readme-assets/icons/bash.svg' width='50' style="margin:0 8px;" alt='Bash'><img src='./readme-assets/icons/git.svg' width='50' style="margin:0 8px;" alt='Git'><img src='./readme-assets/icons/rust.svg' width='50' style="margin:0 8px;" alt='Rust'><img src='./readme-assets/icons/solidity.svg' width='50' style="margin:0 8px;" alt='Solidity'><img src='./readme-assets/icons/aws.svg' width='50' style="margin:0 8px;" alt='AWS'><img src='./readme-assets/icons/reactjs.svg' width='50' style="margin:0 8px;" alt='ReactJS'><img src='./readme-assets/icons/nextjs.svg' width='50' style="margin:0 8px;" alt='NextJS'><img src='./readme-assets/icons/gatsby.svg' width='50' style="margin:0 8px;" alt='Gatsby'><img src='./readme-assets/icons/css.svg' width='50' style="margin:0 8px;" alt='CSS'><img src='./readme-assets/icons/tailwindcss.svg' width='50' style="margin:0 8px;" alt='TailwindCSS'><img src='./readme-assets/icons/nodejs.svg' width='50' style="margin:0 8px;" alt='NodeJS'><img src='./readme-assets/icons/expressjs.svg' width='50' style="margin:0 8px;" alt='ExpressJS'><img src='./readme-assets/icons/nestjs.svg' width='50' style="margin:0 8px;" alt='NestJS'><img src='./readme-assets/icons/prisma.svg' width='50' style="margin:0 8px;" alt='Prisma'><img src='./readme-assets/icons/mongodb.svg' width='50' style="margin:0 8px;" alt='MongoDB'><img src='./readme-assets/icons/mysql.svg' width='50' style="margin:0 8px;" alt='MySQL'><img src='./readme-assets/icons/postgresql.svg' width='50' style="margin:0 8px;" alt='PostgreSQL'>

##

<img align="left" alt="yondav's GitHub Stats" src="https://github-readme-stats.vercel.app/api?username=yondav&show_icons=true&hide_border=true&title_color=499890&icon_color=E3920D&bg_color=19191c&text_color=f1f3f7" />
