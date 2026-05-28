### Global Flags

These flags apply to all Turborepo commands.

    --color: Forces color output, even in non-interactive terminals (useful for CI).

        Example: turbo run build --color

    --no-color: Suppresses color output, even in interactive terminals.

        Example: turbo run build --no-color

    --no-update-notifier: Disables the update notification (automatically disabled in CI). Can also be set via the TURBO_NO_UPDATE_NOTIFIER environment variable.

turbo run <task>

Runs npm scripts across all workspaces in a specified scope. Tasks must be defined in your pipeline configuration. You can run multiple tasks, and any arguments following -- will be passed to the tasks.
bash

turbo run <task1> <task2> [options] [-- <args>]

## Options

    --cache-dir <path>: Specifies the local filesystem cache directory. Defaults to ./node_modules/.cache/turbo.

        Example: turbo run build --cache-dir="./my-cache"

    --concurrency <number|percentage>: Limits the maximum number of concurrent tasks. Defaults to 10. Use 1 for serial execution, or a percentage (e.g., 50%). This option is ignored if --parallel is also used.

        Example: turbo run build --concurrency=50%

    --continue: Continues execution even if a task fails. By default, --parallel sets this to true. When true, the process exits with the highest exit code encountered.

        Example: turbo run build --continue

    --cwd <path>: Sets the working directory for the command.

        Example: turbo run build --cwd ./somewhere/else

    --deps: Controls whether dependent packages are included in execution. Defaults to true. Use --no-deps to exclude them.

        Example: turbo run build --no-deps

    --graph [filename]: Generates a visualization of the task graph. Requires Graphviz for image output (svg, png, etc.). Prints the dot graph to stdout if Graphviz is not installed.

        Example: turbo run build --graph=my-graph.svg

    --filter <pattern>: Scopes the command to specific packages or workspaces. Supports glob patterns and git-based filtering (e.g., --filter=[main] to only run tasks for packages changed since the main branch).

        Example: turbo run build --filter=my-app

    --output-logs <type>: Controls the log output format. For example, --output-logs=new-only shows logs only for tasks that were not cached.

        Example: turbo run build --output-logs=new-only

    --log-prefix <type>: Modifies the task log prefix. Setting --log-prefix=none removes the <package>:<task>: prefix from output.

        Example: turbo run build --log-prefix=none

turbo prune <scope>

Creates a subset of your monorepo containing only the specified packages and their dependencies. This is particularly useful for creating optimized Docker contexts.
bash

turbo prune <scope> [options]

## Options

    --docker: Generates a pruned workspace specifically for Docker builds.

        Example: turbo prune --scope=@myorg/web-app --docker

    --out-dir <path>: Specifies the output directory for the pruned workspace.

        Example: turbo prune @myorg/web-app --out-dir=deploy

    --scope <package>: The package or workspace to include in the pruned subset.

        Example: turbo prune --scope=@acme-inc/storybook

turbo generate

Runs custom generators defined in your repository or creates new workspaces.
bash

turbo generate [command] [options]

## Subcommands

    run [generator-name]: Executes a custom generator defined in your repository's configuration.

    workspace: Creates a new package in your repository by copying an existing one or starting from scratch.

## Options

    --args <answers>: Provides answers directly to the generator's prompts.

        Example: turbo generate run my-generator --args="name=my-app"

    --config <path>: Specifies the generator configuration file.

        Example: turbo generate workspace --config=./generator.config.json

turbo login, logout, link, unlink

These commands manage authentication and remote caching with Vercel.

    turbo login: Logs in to your Vercel account.

    turbo logout: Logs out of your Turborepo account.

    turbo link: Links your local directory to a Vercel organization, enabling remote caching.

    turbo unlink: Unlinks the current directory, disabling remote caching.

### Examples

bash

# Login to Vercel

turbo login

# Login with SSO

turbo login --sso-team=my-team

# Link project to Vercel

turbo link

# Unlink project

turbo unlink

Other Commands

    turbo ls: (Experimental) Lists packages and task graphs in your repository.

    turbo query: (Proposed) Opens GraphiQL to run GraphQL queries against repository data.

## Flag Syntax

Options that require a value can be passed with an equals sign or a space:
bash

--opt=value
--opt="value with a space"
--opt value
--opt "value with a space"

Boolean options can be set to true by just using the flag, or to false by using --no-<flag> or --flag=false.
