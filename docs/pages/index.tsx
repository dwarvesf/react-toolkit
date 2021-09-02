import {
  Box,
  BoxProps,
  Button,
  Center,
  chakra,
  Circle,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Img,
  LightMode,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { chunk } from '@chakra-ui/utils'
import users from 'chakra-users'
import { ChakraProAd } from 'components/chakra-pro/home-page-ad'
import { AdBanner } from 'components/chakra-pro/ad-banner'
import Container from 'components/container'
import DiscordStrip from 'components/discord-strip'
import { Footer } from 'components/footer'
import Header from 'components/header'
import SEO from 'components/seo'
import TweetCard from 'components/tweet-card'
import { tweets } from 'configs/tweets.json'
import NextLink from 'next/link'
import * as React from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import { DiGithubBadge } from 'react-icons/di'
import { FaArrowRight, FaDiscord, FaMicrophone } from 'react-icons/fa'
import { FiDownload, FiGithub, FiUsers } from 'react-icons/fi'
import { IoMdMoon } from 'react-icons/io'
import { MdAccessibility, MdGrain, MdPalette } from 'react-icons/md'
import type { Member, Sponsor } from 'src/types/github'
import { getAllContributors } from 'utils/get-all-contributors'
import { getAllMembers } from 'utils/get-all-members'
import { getAllSponsors } from 'utils/get-all-sponsors'
import { getGithubStars } from 'utils/get-github-stars'

const Feature = ({ title, icon, children, ...props }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      rounded="12px"
      shadow="base"
      p="40px"
      {...props}
    >
      <Flex
        rounded="full"
        w="12"
        h="12"
        bg="teal.500"
        align="center"
        justify="center"
      >
        <Icon fontSize="24px" color="white" as={icon} />
      </Flex>
      <Heading as="h3" size="md" fontWeight="semibold" mt="1em" mb="0.5em">
        {title}
      </Heading>
      <Text fontSize="lg" opacity={0.7}>
        {children}
      </Text>
    </Box>
  )
}

interface StatBoxProps extends BoxProps {
  icon?: React.ElementType
  title: string
  description: string
}

const StatBox = (props: StatBoxProps) => {
  const { icon: StatIcon, title, description, ...rest } = props
  return (
    <Flex
      direction="column"
      align={{ base: 'center', md: 'flex-start' }}
      pl={{ base: '0', md: '8' }}
      borderLeft="2px solid"
      borderLeftColor="yellow.200"
      {...rest}
    >
      <Box fontSize={{ base: '4rem', md: '6rem' }} lineHeight="1em" mb="20px">
        {title}
      </Box>
      <Stack isInline align="center">
        <StatIcon size="24px" />
        <Text>{description}</Text>
      </Stack>
    </Flex>
  )
}

interface HomePageProps {
  members: Member[]
  githubStars: string
  sponsors: {
    companies: Sponsor[]
    individuals: Sponsor[]
  }
}

const HomePage = ({ members, sponsors, githubStars }: HomePageProps) => {
  return (
    <>
      <SEO
        title="Chakra UI - A simple, modular and accessible component library that gives you the building blocks you need to build your React applications."
        description="Simple, Modular and Accessible UI Components for your React Applications. Built with Styled System"
      />
      <AdBanner />
      <Header />
      <Box mb={20}>test</Box>
    </>
  )
}

export async function getStaticProps() {
  const { prettyCount } = await getGithubStars()
  const contributors = getAllContributors()
  const members = getAllMembers()
  const sponsors = getAllSponsors()

  return {
    props: {
      githubStars: prettyCount,
      members,
      contributors,
      sponsors,
    },
  }
}

export default HomePage
