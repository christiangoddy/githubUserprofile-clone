import React from 'react'
import { useTheme } from 'next-themes';
import Repolist from '../components/RepoList'
import { RepoListProps } from '../types/Repo'
const RepoList = ({repos}: RepoListProps) => {
    const { resolvedTheme } = useTheme();
  return (
    <div><Repolist repos={repos}
    /></div>
  )
}
export default RepoList
