FROM node

RUN mkdir /ui
WORKDIR /ui

COPY package*.json .
RUN yarn install

COPY . .

EXPOSE 6006

CMD ["yarn", "run", "storybook"]