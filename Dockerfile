FROM node:14 as dependencies

WORKDIR /invapaste
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

FROM node:14 as builder

WORKDIR /invapaste

COPY . .
COPY --from=dependencies /invapaste/node_modules ./node_modules

RUN yarn build

FROM node:14 as runner

WORKDIR /invapaste

COPY --from=builder /invapaste/public ./public
COPY --from=builder /invapaste/.next ./.next
COPY --from=builder /invapaste/node_modules ./node_modules
COPY --from=builder /invapaste/package.json ./package.json

EXPOSE 3000

CMD ["yarn", "start"]