### Steps

It is structured as a nest app for code generation sake but doesn't actually spin one up as you can see the issue without starting the server but running the serve target

1. `yarn install`
2. `yarn nx serve-rspack api`
3. you'll see in the console that the value is not validated correctly (in `main.ts` we are manually doing what the validation in Nest does)

`id` should be validated and not have any errors, instead it seems that the class is not being transformed correctly (maybe an issue with class-transformer not class-validator)

If you run `yarn nx serve-webpack api` instead you will see it will validate as it should.

One additional piece: If I do not bundle dependencies (which seems to be the default) it passes. Comment out line 6-19 in rspack.config.js and rerun the build, validation seems to pass now.
