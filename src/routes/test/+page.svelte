<script lang="ts">
    import NavMenu from '../../components/navigation/nav-menu.svelte';
	import Navigation from '../../components/navigation/Navigation.svelte';
    import NavigationItem from '../../components/navigation/NavigationItem.svelte';
    import Test from '../../components/navigation/Test.svelte';
</script>

<svelte:head>
	<title>Test</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <NavMenu items={['About Me', 'Projects', 'Work Exp', 'Contact']} />

    <!-- <Navigation /> -->

    <!-- <NavigationItem /> -->

    <Test />
    
</section>