FROM node:20.14.0-bookworm-slim

WORKDIR /app

ENV NODE_ENV production

#RUN addgroup --system --gid 1001 nodejs
#RUN adduser --system --uid 1001 nextjs
#COPY --chown=nextjs:nodejs .next/standalone ./
#COPY --chown=nextjs:nodejs .next/static .next/standalone/
#USER nextjs

COPY .next/standalone ./
COPY .next/static ./.next/static


EXPOSE 3000

ENV PORT=3000

CMD HOSTNAME="0.0.0.0" node ./server.js
