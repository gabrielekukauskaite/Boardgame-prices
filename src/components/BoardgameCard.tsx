import type { Boardgame } from '@/types/boardgame'
import Bookmark from './Bookmark'
import Clock from './icons/Clock'
import Star from './icons/Star'
import Player from './icons/Player'
import Dollar from './icons/Dollar'

interface BoardgameCardProps {
  boardgame: Boardgame
}

const BoardgameCard = ({ boardgame }: BoardgameCardProps) => {
  const playtime = (() => {
    if (boardgame.minPlaytime === 0 || boardgame.maxPlaytime === 0) {
      return '-'
    }

    if (boardgame.minPlaytime === boardgame.maxPlaytime) {
      return `${boardgame.minPlaytime}m`
    }

    return `${boardgame.minPlaytime}-${boardgame.maxPlaytime}m`
  })()

  return (
    <div className="flex flex-col w-2xs min-w-2xs h-90 bg-(--color-red-4) border-4 rounded-2xl shadow-(--shadow-black)">
      <div className="relative">
        <img
          className="rounded-t-xl w-2xs h-50 border-b-3 object-cover"
          alt="boardgame-image"
          src={boardgame.image}
        />

        <Bookmark rank={boardgame.rank} />
      </div>

      <div className="flex flex-col gap-y-2 p-4 pt-2 h-full place-content-between">
        <div>
          <span className="font-bold">{boardgame.name}</span>
          &nbsp;
          <span className="text-xs">({boardgame.yearPublished})</span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <div className="flex items-center gap-x-1 text-sm">
            <span className="w-5 h-5">
              <Star />
            </span>
            <span className="flex">{boardgame.score || '-'}</span>
          </div>

          <div className="flex items-center gap-x-1 text-sm">
            <span className="w-5 h-5">
              <Player />
            </span>
            <span className="flex">
              {boardgame.minPlayers}-{boardgame.maxPlayers}
            </span>
          </div>

          <div className="flex items-center gap-x-1 text-sm">
            <span className="w-5 h-5">
              <Dollar />
            </span>
            <span className="flex">
              {boardgame.price ? `£${boardgame.price.toFixed(2)}` : '-'}
            </span>
          </div>

          <div className="flex items-center gap-x-1 text-sm">
            <span className="w-5 h-5">
              <Clock />
            </span>
            <span className="flex">{playtime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardgameCard
