import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

interface IPostProps {
  post: any;
}

export default function BlogPost({ post }: IPostProps) {
  return (
    <Center>
      <Box
        maxW={""}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={
              post.frontmatter.cover_image
                ? post.frontmatter.cover_image
                : "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            layout={"fill"}
            alt=""
          />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Blog
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {post.frontmatter.title}
          </Heading>
          <Text color={"gray.500"}>{post.frontmatter.excerpt}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Oliver Patrick</Text>
            <Text color={"gray.500"}>
              {post.frontmatter.date + " · 6min read"}
            </Text>

            <Link href={`/blog/${post.slug}`} passHref>
              <Button>Read More...</Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
