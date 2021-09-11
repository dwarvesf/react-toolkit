import React from 'react'
import { Box, Icon, Text, Stack, Link, chakra } from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io'
import { FaDiscord } from 'react-icons/fa'
import { DiGithubBadge } from 'react-icons/di'
import siteConfig from 'configs/site-config'

type FooterLinkProps = {
  icon?: React.ElementType
  href?: string
  label?: string
}

const FooterLink: React.FC<FooterLinkProps> = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
  </Link>
)

const links = [
  {
    icon: DiGithubBadge,
    label: 'GitHub',
    href: siteConfig.author.github,
  },
  {
    icon: IoLogoTwitter,
    label: 'Twitter',
    href: siteConfig.author.twitter,
  },
  {
    icon: IoLogoLinkedin,
    label: 'LinkedIn',
    href: siteConfig.author.linkedin,
  },
  {
    icon: FaDiscord,
    label: 'Discord',
    href: siteConfig.author.github,
  },
]

export const Footer = () => (
  <Box as="footer" mt={12} textAlign="center">
    <Text fontSize="sm">Made with ❤️ by Dwarves</Text>
    <Stack mt={4} direction="row" spacing="12px" justify="center">
      {links.map((link) => (
        <FooterLink key={link.href} {...link} />
      ))}
    </Stack>
  </Box>
)

export default Footer
